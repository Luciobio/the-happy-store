import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item }) => {
    const {name, quantity, totalPrice} = item;
    const { removeItem } = useContext(CartContext);

    return (
        <div>
            <h2>
                {name}
            </h2>
            <h3>
                Qty: {quantity}
            </h3>
            <h3>
                Total: {totalPrice}
            </h3>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
        </div>
    );
};

export default CartItem;