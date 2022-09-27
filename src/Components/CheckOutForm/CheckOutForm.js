import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../Services/Firebase'
import { Timestamp, getDocs, query, collection, where, documentId, writeBatch, addDoc } from 'firebase/firestore'

const CheckOutForm = () => {
    const { cart, cartTotal } = useContext(CartContext);

    const createOrder = e => {
        e.preventDefault()

        const items = []
        cart.forEach(e => {
            let orderItem = {
                id: e.id,
                title: e.name,
                price: e.price,
            }
            items.push(orderItem)
        });

        const order = {
            buyer: {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            },
            items: items,
            date: Timestamp.fromDate(new Date()),
            total: cartTotal()
        };

        const outOfStock = []
        const ids = cart.map(prod => prod.id);
        const batch = writeBatch(db)

        getDocs(query(collection(db, "products"), where(documentId(), "in", ids)))
            .then(response => {
                const { docs } = response

                docs.forEach(doc => {
                    const data = doc.data()
                    const stockDb = data.stock

                    const addedProduct = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = addedProduct?.quantity

                    stockDb >= prodQuantity ?
                        batch.update(doc.ref, { stock: stockDb - prodQuantity })
                        :
                        outOfStock.push({ id: doc.id, ...data })
                });

                if (outOfStock.length === 0) {
                    addDoc(collection(db, "orders"), order)
                        .then(response => console.log(`this is your order ${response.id}`));
                    batch.commit();
                }
                else outOfStock.map(p => console.log(`sorry, the product ${p.name} is out of stock`))
            });
    };

    return (
        <div>
            <form onSubmit={createOrder}>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <label>
                    Phone:
                    <input type='tel' name='phone' />
                </label>
                <label>
                    Email:
                    <input type='email' name='email' />
                </label>
                <button type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default CheckOutForm;