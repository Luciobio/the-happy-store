import './CartItem.css';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item }) => {
    const { name, img, quantity, totalPrice } = item;
    const { removeItem } = useContext(CartContext);

    return (
        <div className='CartItem'>
            <img className='CartItemImage' alt={name} src={img} />
            <div>
                <h2>{name}</h2>
                <div>
                    <h3>Qty: {quantity}</h3>
                    <h3>Total: {totalPrice}</h3>
                </div>
            </div>
            <button onClick={() => removeItem(item.id)}>REMOVE ITEM</button>
        </div>
    );
};

export default CartItem;