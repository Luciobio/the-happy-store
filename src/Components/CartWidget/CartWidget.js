import './CartWidget.css';
import { ReactComponent as CartIcon } from '../../Imgs/Icons/cart_icon.svg';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className='CartWidget'>
            <CartIcon className='cartIcon' />
            <div className='count'>{cart.length}</div>
        </div>
    );
};

export default CartWidget;
