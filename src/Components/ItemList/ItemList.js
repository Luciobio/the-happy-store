import { useEffect, useState } from "react";
import {getProducts} from "../../asyncMock";
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = () => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(()=>{
    getProducts()
    .then((res) => {
        setItems(res);
    })
    .finally(() => setLoading(false)); 
},[]);

const showItems = items.map(prod => <Item key= {prod.id} prod= {prod}/>)

const isLoading = loading? <h2>Loading...</h2> : (
    <div className="ItemList">
        {showItems}
    </div>
);

return (
    isLoading
)
}

export default ItemList;