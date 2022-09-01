import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {getProducts} from "../../asyncMock";

const ItemDetailContainer = ({countProps}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProducts()
        .then((res) => {
            setItems(res);
        })
        .finally(() => setLoading(false)); 
    },[]);

    const item = items.find(item => item.id === 1)
    console.log(item);

    const isLoading = loading? <h2>Loading...</h2> : (
        <ItemDetail countProps= {countProps} item= {item}/>
    );

    return (
        isLoading
    )
}

export default ItemDetailContainer;