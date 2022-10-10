import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase/index';
import { getDoc, doc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { product } = useParams();

    useEffect(() => {
        //Gets the Product Information from Firebase
        getDoc(doc(db, 'products', product))
            .then(res => {
                const item = { id: res.id, ...res.data() };
                setItem(item);
            })
            .finally(() => setLoading(false));
    }, [product]);

    const isLoading = loading ? <Loading /> : (
        <ItemDetail item={item} />
    );

    return (
        <div className='ItemDetailContainer'>
            {isLoading}
        </div>
    )
}

export default ItemDetailContainer;