import { useEffect, useEstate } from "react";
import Item from '../Item/Item'

const ItemList = () => {
const [items, setItems] = useEstate([]);

useEffect((res)=>{
    fetch(setItems(res));
    
},[]);

const showItem = (items) => { 
    items.map((prod)=> {
        retun (
        <Item noun={prod.name} price={prod.price} stock={prod.stock}/>
        )
    })
}

return (
    <div>
        {showItems(items)};
    </div>
)
}

export default ItemList;