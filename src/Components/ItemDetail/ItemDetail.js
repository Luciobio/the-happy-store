import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
    const { id, name, price, description, img } = item;
    const { addItem, cart, getProductQuantity } = useContext(CartContext);

    const quantityAdded = getProductQuantity(id)

    const countProps = {
        stock: item.stock,
        initial: quantityAdded ? quantityAdded : item.initial,
        onAdd: (count) => {
            if (count > 0) {
                addItem(item, count);
            }
        }
    };

    return (
        <div className='ItemDetail'>
            <img className='itemImg' src={img} alt={name} />
            <div className='infoBox'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>$ {price}</h3>
                {
                    cart.length === 0 ? (

                        <ItemCount countProps={countProps} />
                    ) : (
                        <div>
                            <ItemCount countProps={countProps} />
                            <button><Link className='whiteLink' to='/cart'>CHECK OUT</Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;