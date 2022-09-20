import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem";

const CartContainter = () => {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <div>
            {
                cart.map(item => <CartItem key={item.id} item={item} />)
            }
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
};

export default CartContainter;