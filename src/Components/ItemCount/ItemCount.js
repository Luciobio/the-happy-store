import './ItemCount.css';
import {useState} from 'react';

const ItemCount = ({countProps}) => {

    const {stock, initial, onAdd} = countProps;

    const [count, setCount] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const increment = (stock) => {
        if(count < stock) setCount(current => current + 1);
    };

    const decrement = () => {
        if(count > initial) setCount(current => current - 1);
    };

    const handeAdd = () => {
        onAdd(count);
        setItemStock(current => current - count);
        setCount(0);
    }
    
    return (
        <div className= 'ItemCount'>
            <div className= 'bttnCont'>
                <button onClick={decrement}> - </button>
                <div className= 'count'>{count}</div>
                <button onClick={()=> increment(itemStock)}> + </button>
            </div>
            <button className = 'addBtn' onClick={handeAdd}><div className='add'>ADD TO CART</div></button>
        </div>
    );
};

export default ItemCount;