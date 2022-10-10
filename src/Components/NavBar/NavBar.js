import './NavBar.css';
import { useEffect, useState } from 'react';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../../Imgs/THS_logo.png'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Services/Firebase/index';
import { Link } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const cats = collection(db, 'categories');
        getDocs(cats)
            .then(res => {
                let cat = res.docs.map(e => {
                    return { id: e.id, category: e.data().category }
                })
                setCategories(cat)
            })
            .finally(() => {
                console.log(categories)
            })
    }, []);

    const NavLinks = categories.map(e => <Link to={'/category/'+e.id}>{e.category.toUpperCase()}</Link>)

    return (
        <div className='NavBar'>
            <Link to='/'><img className='logo' src={Logo} alt='/' /></Link>
            <div className='linksCont'>
                {NavLinks}
                {/* <Link to='/category/Accesories'>ACCESORIES</Link>
                <Link to='/category/Growing'>GROWING</Link>
                <Link to='/category/Lighting'>LIGHTING</Link> */}
            </div>
            <div className='linksCont'>
                <Link to='/contact'>CONTACT</Link>
                <div className='cartCont'>
                    <Link to='/cart'>CART</Link>
                    <CartWidget cartCount={cartCount} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;