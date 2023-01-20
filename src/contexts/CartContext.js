import React, { useContext, useState, useEffect } from 'react';

const CartContext = React.createContext();

// Custom Cart hook
export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const value = {
        cart: true
    }

    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}