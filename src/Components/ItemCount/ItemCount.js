import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = (stock) => {
        if(count < stock) setCount(current => current + 1);
    };

    const decrement = () => {
        if(count > initial) setCount(current => current - 1);
    };

    const handeAdd = () => {
        onAdd(count);
        (stock > 0)? setCount(1) : setCount(0);
    }

    return (
        <div className= 'ItemCount'>
            <div className= 'count'>{count}</div>
            <button onClick={()=> increment(stock)}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={handeAdd}> Agregar al Carrito </button>
        </div>
    );
};

export default ItemCount;