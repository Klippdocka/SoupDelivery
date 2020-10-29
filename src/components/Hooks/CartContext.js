
import React, { useState, useEffect} from 'react';
import { useLocalStorage } from '../Hooks/UseLocalState';


export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))
        
        if (cartItemsData) {
            setCart(cartItemsData)
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

