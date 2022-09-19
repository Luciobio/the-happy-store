import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({item}) => {
    const {name, price, description, img} = item;
    const [cartCount, setCartCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const countProps = {
        stock: item.stock,
        initial: item.initial,
        onAdd: (count) => {
            if(count > 0) {
                const newProduct = {...item, quantity: count}
                addToCart(newProduct);
            }
        }
    };

    return (
        <div className='ItemDetail'>
            <img className='itemImg' src={img} alt={name}/>
            <div className='infoBox'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>$ {price}</h3>
                {
                    cartCount === 0 ? (

                        <ItemCount countProps={countProps}/>
                    ) : (
                        <button><Link className='whiteLink' to='/cart'>CHECK OUT</Link></button>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;