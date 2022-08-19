import './CartWidget.css';
import {ReactComponent as CartIcon} from '../../Imgs/Icons/cart_icon.svg';

const CartWidget = () => {
    let count = 0;
    return(
        <div className='CartWidget'>
            <CartIcon className = 'cartIcon'/>
            <div className='count'>{count}</div>
        </div>
    );
};

export default CartWidget;
