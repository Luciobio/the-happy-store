import './ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import {getProducts} from "../../asyncMock";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProducts()
        .then((res) => {
            setItems(res);
        })
        .finally(() => setLoading(false)); 
    },[]);

    return (
        <div className='ItemListContainer'>
            <ItemList items= {items} loading= {loading}/>
        </div>
    );
};

export default ItemListContainer;