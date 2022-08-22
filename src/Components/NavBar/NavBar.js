import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../../Imgs/THS_logo.png'

const NavBar = ({cartCount}) => {
    return(
        <div className= 'NavBar'>
            <img className= 'logo' src={Logo} alt='/'/>
            <div className= 'linksCont'>
                <a className='navItem' href='/'>HOME</a>
                <a className='navItem' href='/'>PRODUCTS</a>
                <a className='navItem' href='/'>CONTACT</a>
                <div className='cartCont'>
                    <a className='navItem' href='/'>CART</a>
                    <CartWidget cartCount={cartCount}/>
                </div>                
            </div>
        </div>
    );
};

export default NavBar;