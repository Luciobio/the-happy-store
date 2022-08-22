import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
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
            <div className= 'count'>{count}</div>
            <button onClick={()=> increment(itemStock)}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={handeAdd}> Add to Cart </button>
        </div>
    );
};

export default ItemCount;