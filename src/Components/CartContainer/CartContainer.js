import './CartContainer.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const CartContainter = () => {
    const { cart, clearCart, cartTotal } = useContext(CartContext);

    return (
        cart.length > 0 ?
            <div className='CartContainer'>
                <div className='CartContainer'>
                    {
                        cart.map(item => <CartItem key={item.id} item={item} />)
                    }
                    <h2>CART TOTAL: {cartTotal()}</h2>
                    <button onClick={clearCart}>CLEAR CART</button>
                </div>
                <CheckOutForm />
            </div>
            :
            <div className='CartContainer'>
                <br />
                <h2>Your Cart is Empty</h2>
                <br />
                <button><Link className='whiteLink' to='/'>CHECK OUR PRODUCTS</Link></button>
            </div>
    )
};

export default CartContainter;