import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import ItemCount from "../ItemCount/ItemCount";
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {
    const { id, name, price, description, img } = item;

    const [count, setCount] = useState(0);

    const { addItem, getProductQuantity } = useContext(CartContext);

    const quantityAdded = getProductQuantity(id);

    const notify = () => toast.success(`🌿 ${name} added to Cart`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
    });

    const countProps = {
        stock: item.stock,
        initial: quantityAdded ? quantityAdded : item.initial,
        onAdd: (count) => {
            if (count > 0) {
                addItem(item, count);
                setCount(count);
                notify();
            }
        }
    };

    return (
        <div className='ItemDetail'>
            <img className='itemImg' src={img} alt={name} />
            <div className='infoBox'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>$ {price}</h3>
                {
                    count === 0 ? (

                        <ItemCount countProps={countProps} />
                    ) : (
                        <button><Link className='whiteLink' to='/cart'>CHECK OUT</Link></button>
                    )
                }
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                style={{ fontfamily: 'Barlow Condensed' }}
            />
        </div>
    )
}

export default ItemDetail;