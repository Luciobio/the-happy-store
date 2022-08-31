import ItemCount from "../ItemCount/ItemCount";

const Item = ({prod, countProps}) => {
    console.log(prod.img)
    return (
        <div className = 'ItemCount'>
            <img  alt={prod.noun} src={prod.img}/>
            <h4>{prod.name}</h4>
            {/* <p className="cardDesc">{prod.description}</p> */}
            <h3>$ {prod.price}</h3>
            <ItemCount countProps={countProps}/>
        </div>
    )
};

export default Item;