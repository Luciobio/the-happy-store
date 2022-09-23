import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const CartContainter = () => {
    const { cart, clearCart } = useContext(CartContext);

    const total = () => {
        let sum = 0;
        cart.forEach(e => sum += e.totalPrice);
        return sum;
    }

    return (
        cart.length > 0 ?
            <div>
                <div>
                    {
                        cart.map(item => <CartItem key={item.id} item={item} />)
                    }
                    <button onClick={clearCart}>Clear Cart</button>
                    <br />
                    <div>
                        Cart Total: {total()}
                    </div>
                </div>
                <br />
                <CheckOutForm/>
            </div>
            :
            <div>
                <br />
                <h2>No hay productos en el Carrito</h2>
            </div>
    )
};

export default CartContainter;