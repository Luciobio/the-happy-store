import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { useEffect, useState } from "react";
import {getProduct} from "../../asyncMock";
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {product} = useParams();

    useEffect(()=>{
        getProduct(product)
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => setLoading(false)); 
    },[product]);

    const isLoading = loading? <Loading/> : (
        <ItemDetail item={item}/>
    );

    return (
        <div className='ItemDetailContainer'>
            {isLoading}
        </div>
    )
}

export default ItemDetailContainer;