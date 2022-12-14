import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../Services/Firebase'
import { Timestamp, getDocs, query, collection, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CheckOutForm = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);

    const MySwal = withReactContent(Swal)

    // Sweet Alert Fucntion
    const chechoutSwal = (title, message, icon) => {
        const theSwal = Swal.mixin({
            customClass: {
                confirmButton: '',
            },
            buttonsStyling: false,
        })

        theSwal.fire({
            title: 'Generating Order...',
            timer: 1500,
            didOpen: () => {
                MySwal.showLoading()
            },
        }).then(() => {
            theSwal.fire({
                icon: icon,
                title: title,
                text: message,
            })
        })
    }

    // Create order with items in the cart and dinamically generated user ID.
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
                    e.target.name.value = '';
                    e.target.phone.value = '';
                    e.target.email.value = '';
                    chechoutSwal('Done!', 'You will recieve an e-mail with the details', 'success');
                    clearCart();
                }
                else outOfStock.map(p => chechoutSwal('Sorry', `The product ${p.name} is out of stock`, 'error'))
            });

    };

    return (
        <form className='CheckOutForm' onSubmit={createOrder}>
            <label>
                <h3>Name:</h3>
                <input type='text' name='name' placeholder='Name' />
            </label>
            <label>
                <h3>Phone:</h3>
                <input type='tel' name='phone' placeholder='Phone' />
            </label>
            <label>
                <h3>Email:</h3>
                <input type='email' name='email' placeholder='E-mail' />
            </label>
            <div></div>
            <button className='submitBtn' type='submit'>CONFIRM</button>
        </form>
    )
}

export default CheckOutForm;