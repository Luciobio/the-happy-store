import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../Services/Firebase'
import {Timestamp } from 'firebase/firestore'

const CheckOutForm = () => {
const {cart} = useContext(CartContext);

    const createOrder = e => {
        e.preventDefault()
        
        const order = {
            buyer: {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            },
            items: cart,
            date: Timestamp.fromDate(new Date()),
        };
        console.log(order);
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
                <input type='submit' value='Confirm'/>
            </form>
        </div>
    )
}

export default CheckOutForm;