import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem";

const CartContainter = () => {
    const { cart, clearCart } = useContext(CartContext);

    return (
        cart.length > 0 ?
            <div>
                {
                    cart.map(item => <CartItem key={item.id} item={item} />)
                }
                <button onClick={clearCart}>Clear Cart</button>
                <br/>
                <div>
                    Cart Total: {/* cart.reduce((value, acc) => value.totalPrice + acc) */}
                </div>
            </div>
        :
            <div>
                <br/>
                <h2>No hay productos en el Carrito</h2>
            </div>
    )
};

export default CartContainter;