import {Children, createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const newList = [...cart, product];
        setCart(newList);
    };

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}  
        </CartContext.Provider>
    );
};