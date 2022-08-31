import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({countProps, greeting}) => {
    return (
        <div className='ItemListContainer'>
            <h1>{greeting.message}</h1>
            <ItemList countProps={countProps}/>
            {/* <ItemCount stock={countProps.stock} initial={countProps.initial} onAdd={countProps.onAdd}/> */}
        </div>
    );
};

export default ItemListContainer;