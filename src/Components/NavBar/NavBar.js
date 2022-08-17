import './NavBar.css';
import Logo from '../../Imgs/THS_logo.png'
import {ReactComponent as CartIcon} from '../../Imgs/Icons/cart_icon.svg'
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return(
        <div className= 'NavBar'>
            <img className= 'logo' src={Logo} alt='/'/>
            <div className= 'linksCont'>
                <a className='navItem' href='/'>HOME</a>
                <a className='navItem' href='/'>PRODUCTS</a>
                <a className='navItem' href='/'>CONTACT</a>
                <div className='cartCont'>
                    <div><CartIcon className='cartIcon navItem'/></div>
                    <a className='navItem' href='/'>CART</a>
                </div>                
            </div>
        </div>
    );
};

export default NavBar;