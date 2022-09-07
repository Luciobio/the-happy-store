import './ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import {getProducts, getCategory} from "../../asyncMock";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams()

    useEffect(()=>{
        const request = category ? getCategory : getProducts
        
        request(category).then(res => {
            setItems(res)
        }).finally(() => {
            setLoading(false)
        })
    },[category]);

    return (
        <div className='ItemListContainer'>
            <ItemList items= {items} loading= {loading}/>
        </div>
    );
};

export default ItemListContainer;