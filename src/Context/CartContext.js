import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const currentCart = [...cart];
        if (isInCart(item.id)) {
            const itemIndex = cart.findIndex(e => e.id === item.id);
            currentCart[itemIndex].quantity += quantity;
            
            setCart(currentCart);
        } else {
            const newItem = { ...item, quantity: quantity , totalPrice: quantity*item.price};
            const newList = [...cart, newItem];
            setCart(newList);
        }
    };

    const removeItem = itemId => {
        const currentCart = [...cart];
        const newCart = currentCart.filter(e => e.id !== itemId);
        setCart(newCart);
    };

    const clearCart = () => setCart([]);

    const isInCart = itemId => cart.some(e => e.id === itemId);

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    const cartTotal = () => cart.reduce((acc, e) => acc + e.totalPrice, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getProductQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};