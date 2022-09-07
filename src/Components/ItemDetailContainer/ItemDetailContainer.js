import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {getProduct} from "../../asyncMock";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({countProps}) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {product} = useParams();

    useEffect(()=>{
        getProduct(product)
        .then(res => {
            setItem(res);
            console.log(res);
            console.log(item);
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => setLoading(false)); 
    },[product]);

    const isLoading = loading? <h2>Loading...</h2> : (
        <ItemDetail countProps={countProps} item={item}/>
    );

    return (
        isLoading
    )
}

export default ItemDetailContainer;