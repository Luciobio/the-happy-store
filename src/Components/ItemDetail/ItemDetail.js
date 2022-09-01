import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({countProps, item}) => {
    const {name, price, description, img} = item
    return (
        <div className='ItemDetail'>
            <img className='itemImg' src={img} alt={name}/>
            <div className='infoBox'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>$ {price}</h3>
                <ItemCount countProps={countProps}/>
            </div>
        </div>
    )
}

export default ItemDetail;