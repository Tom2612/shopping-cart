import React, { useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { setDoc, doc, getDocs, collection, updateDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const CartContext = React.createContext();

// Custom Cart hook
export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(null);
    const [dataFetch, setDataFetch] = useState(false);
    const [loading, setLoading] = useState(true);
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
            setLoading(false);
        };

        if (!currentUser) {
            return setCart([])
        }
        return getUserCart;
        
    }, [dataFetch])

    // All cart functions here
    const addToCart = async (information) => {

        //Check to see if item is already in cart
        let array = cart.map(product => product.name);
        if (array.includes(information.name)) {
            return 
        };       

        const userProduct = {
            ...information,
            qty: 1,
        }

        try {
            await setDoc(doc(db, `user ${currentUser.uid}`, information.id), userProduct);
        } catch (e) {
            console.log(e);
        }
        setDataFetch(!dataFetch);
    }

    const incrementQty = async (information) => {
        console.log(information);
        const productRef = doc(db, `user ${currentUser.uid}`, information.id);
        try {
            await updateDoc(productRef, {
                qty: information.qty + 1
            })
        } catch (error) {
            console.log('error', error);
        }
        setDataFetch(!dataFetch);
    }

    const decrementQty= async (information) => {
        if (information.qty > 1) {
            const productRef = doc(db, `user ${currentUser.uid}`, information.id);
            try {
                await updateDoc(productRef, {
                    qty: information.qty - 1
                })
                console.log('decrementing!');
            } catch(error) {
                console.log('error', error);
            }
        } else {
            await removeFromCart(information);
            console.log('below 1, removed.');
        }
        setDataFetch(!dataFetch);
    }

    const removeFromCart = async (information) => {
        const productRef = doc(db, `user ${currentUser.uid}`, information.id);
        try {
            await deleteDoc(productRef);
            console.log('product removed');
        } catch (error) {
            console.log('error', error);
        }
        setDataFetch(!dataFetch);
    }
    
    const value = {
        addToCart,
        cart,
        incrementQty,
        decrementQty,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {/* { !loading && children } */}
            {children}
        </CartContext.Provider>
    )
}