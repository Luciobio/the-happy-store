import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Services/Firebase/index';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Imgs/THS_logo.png';
import './NavBar.css';

const NavBar = ({ cartCount }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        //Gets the dinamically generated categories from Firebase
        const cats = collection(db, 'categories');
        getDocs(cats)
            .then(res => {
                let cat = res.docs.map(e => {
                    return { id: e.id, category: e.data().category }
                })
                setCategories(cat)
            })
    }, []);

    const NavLinks = categories.map(e => <Link key={e.id} to={'/category/' + e.id}>{e.category.toUpperCase()}</Link>)

    return (
        <div className='NavBar'>
            <Link to='/'><img className='logo' src={Logo} alt='/' /></Link>
            <div className='linksCont'>
                {NavLinks}
            </div>
            <div className='linksCont'>
                <div className='cartCont'>
                    <Link to='/cart'>CART</Link>
                    <CartWidget cartCount={cartCount} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;