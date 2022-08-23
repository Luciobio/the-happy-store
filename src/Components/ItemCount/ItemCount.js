import './ItemCount.css';
import {useState} from 'react';
import CardImg from '../../Imgs/card_img.jpg';

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
            <img className='cardImg' src= {CardImg} alt=''/>
            <h4>Producto</h4>
            <div className='bttnCont'>
                <button onClick={decrement}> - </button>
                <div className= 'count'>{count}</div>
                <button onClick={()=> increment(itemStock)}> + </button>
            </div>
            <button className = 'addBttn' onClick={handeAdd}> Add to Cart </button>
        </div>
    );
};

export default ItemCount;