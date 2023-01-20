import React, { useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDocs, collection } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const CartContext = React.createContext();

// Custom Cart hook
export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(null);
    const [dataFetch, setDataFetch] = useState(false);
    const { currentUser } = useAuth();

    useEffect(() => {
        const getUserCart = async() => {
            const arr = [];
            const cartRef = collection(db, `user ${currentUser.uid}`);
            const cartSnap = await getDocs(cartRef);
                cartSnap.forEach((doc) => {
                arr.push(doc.data());
                });
            setCart(arr);
                // change cart display qty and work out total?
        };

        getUserCart();
    }, [])

    // All cart functions here
    const addToCart = async (information) => {
        const userProduct = {
            ...information,
            qty: 1,
        }
        try {
            await setDoc(doc(db, `user ${currentUser.uid}`, information.id), userProduct);
            setDataFetch(!dataFetch);
        } catch (e) {
            console.log(e);
        }
    }

    function incrementQty() {

    }

    function decrementQty() {

    }

    function removeFromCart() {

    }

    const value = {
        addToCart,
        cart
    }

    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}