import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../../Imgs/THS_logo.png'
import { Link } from 'react-router-dom';

const NavBar = ({cartCount}) => {
    return(
        <div className= 'NavBar'>
            <Link to='/'><img className= 'logo' src={Logo} alt='/'/></Link>
            <div className='linksCont'>
                <Link className='' to='/category/Accesories'>ACCESORIES</Link>
                <Link to='/category/Growing'>GROWING</Link>
                <Link to='/category/Lighting'>LIGHTING</Link>
            </div>
            <div className= 'linksCont'>
                <Link to='/contact'>CONTACT</Link>
                <div className='cartCont'>
                    <Link to='/cart'>CART</Link>
                    <CartWidget cartCount={cartCount}/>
                </div>                
            </div>
        </div>
    );
};

export default NavBar;