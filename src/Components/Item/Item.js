import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ prod }) => {

    const { name, price, img, id } = prod

    return (
        <div className='Item'>
            <img alt={name} src={img} />
            <h4>{name}</h4>
            <h3>$ {price}</h3>
            <button><Link className='whiteLink' to={`/detail/${id}`}>SEE MORE</Link></button>
        </div>
    )
};

export default Item;