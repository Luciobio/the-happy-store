import './CartWidget.css';
import { ReactComponent as CartIcon } from '../../Imgs/Icons/cart_icon.svg';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const cartCount = () => {
        let acc = 0;
        cart.forEach((item) => {
            acc += item.quantity;
        });
        return acc;
    };

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
