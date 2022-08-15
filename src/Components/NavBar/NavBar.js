import './NavBar.css';
import Logo from '../../Imgs/THS_logo.png'
import {ReactComponent as CartIcon} from '../../Imgs/Icons/cart_icon.svg'

const NavBar = () => {
    return(
        <div className= 'NavBar'>
            <img className= 'logo' src={Logo} alt=''/>
            <div className= 'linksCont'>
                <div className='navItem'>HOME</div>
                <div className='navItem'>PRODUCTS</div>
                <div className='navItem'>CONTACT</div>
                <div><CartIcon className='cartIcon navItem'/></div>
                <div className='navItem'>CART</div>
            </div>
        </div>
    );
};

export default NavBar;