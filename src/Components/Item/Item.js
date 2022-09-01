import './Item.css'

const Item = ({prod}) => {

    const {name, price, img} = prod

    return (
        <div className = 'Item'>
            <img  alt={name} src={img}/>
            <h4>{name}</h4>
            <h3>$ {price}</h3>
            <button>See More</button>
        </div>
    )
};

export default Item;