import './CartWidget.css';
import {ReactComponent as CartIcon} from '../../Imgs/Icons/cart_icon.svg';

const CartWidget = ({cartCount}) => {
    
    return(
        <div className='CartWidget'>
            <CartIcon className = 'cartIcon'/>
            <div className='count'>{cartCount}</div>
        </div>
    );
};

export default CartWidget;
