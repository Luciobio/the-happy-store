import { useEffect, useState } from "react";
import {getProducts} from "../../asyncMock";
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({countProps}) => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(()=>{
    getProducts()
    .then((res) => {
        console.log(res);
        setItems(res);
    })
    .finally(() => setLoading(false)); 
},[]);

const showItems = items.map(prod => <Item countProps={countProps} prod = {prod}/>)

return (
    <div className="ItemList">
        {showItems}
    </div>
)
}

export default ItemList;