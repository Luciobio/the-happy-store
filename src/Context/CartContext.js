import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //Adds an item to the cart. If it is already in the cart updates that item's quantity
    const addItem = (item, quantity) => {
        const currentCart = [...cart];
        if (isInCart(item.id)) {
            const itemIndex = cart.findIndex(e => e.id === item.id);
            currentCart[itemIndex].quantity = quantity;

            setCart(currentCart);
        } else {
            const newItem = { ...item, quantity: quantity, totalPrice: quantity * item.price };
            const newList = [...cart, newItem];
            setCart(newList);
        }
    };

    //Deletes a specific item from the cart
    const removeItem = itemId => {
        const currentCart = [...cart];
        const newCart = currentCart.filter(e => e.id !== itemId);
        setCart(newCart);
    };

    //Deletes all the items in the cart at once
    const clearCart = () => setCart([]);

    //Checks if the product is in the cart
    const isInCart = itemId => cart.some(e => e.id === itemId);

    //Gets the cuantity of a product in the cart
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