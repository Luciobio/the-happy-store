import {Children, createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({chldren}) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{}}>
            {Children}
        </CartContext.Provider>
    )
}