import { useContext } from "react"
import { CartContext, CartProvider } from "../../Context/CartContext"
import CartItem from "../CartItem/CartItem";

const CartContainter = () => {
    const {cart} = useContext(CartContext);
    
    return(
        <div>
            {
            cart.map(item => <CartItem key={item.id} item={item}/>)
            };
        </div>
    )
};

export default CartContainter;