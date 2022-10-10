import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { ReactComponent as CartIcon } from '../../Imgs/Icons/cart_icon.svg';
import './CartWidget.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const cartCount = () => cart.reduce((acc, e) => acc + e.quantity, 0);

    return (
        cart.length === 0 ?
            (
                <div></div>
            )
            :
            (
                <div className='CartWidget'>
                    <CartIcon className='cartIcon' />
                    <div className='count'>{cartCount()}</div>
                </div>
            )
    );
};

export default CartWidget;
