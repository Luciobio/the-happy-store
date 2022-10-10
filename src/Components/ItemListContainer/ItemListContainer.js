import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../Services/Firebase/index';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        // Gets the items based on URL params
        const collectionRef = !category
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', category))

        getDocs(collectionRef)
            .then(res => {
                const items = res.docs.map(e => {
                    return { id: e.id, ...e.data() };
                });
                setItems(items);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category]);

    return (
        <div className='ItemListContainer'>
            <ItemList items={items} loading={loading} />
        </div>
    );
};

export default ItemListContainer;