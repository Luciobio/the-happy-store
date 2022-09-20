import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div>
            <h2>
                {item.name}
            </h2>
            <h3>
                Qty: {item.quantity}
            </h3>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
        </div>
    );
};

export default CartItem;