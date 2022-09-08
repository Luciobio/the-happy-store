import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({item, onAdd2}) => {
    const {name, price, description, img} = item
    const [cartCount, setCartCount] = useState(0);

    const countProps = {
        stock: item.stock,
        initial: item.initial,
        onAdd: (count) => {
            if(count > 0) setCartCount(cartCount + count);
        }
    }

    return (
        <div className='ItemDetail'>
            <img className='itemImg' src={img} alt={name}/>
            <div className='infoBox'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>$ {price}</h3>
                {
                    cartCount === 0 ? (

                        <ItemCount countProps={countProps} onAdd2={onAdd2}/>
                    ) : (
                        <button><Link className='whiteLink' to='/cart'>CHECK OUT</Link></button>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;