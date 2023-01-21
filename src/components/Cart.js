import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);
    
    const { cart } = useCart();

    useEffect(() => {
        try {
        getQty();
        getTotal();
        } catch (e) {
            console.log(e)
        }

    }, [cart]);

    function getQty() {
        let total = 0;
        cart.map(product => {
            return total += product.qty;
        })
        setQty(total);
    }

    function getTotal() {
        let total = 0;
        cart.map(product => {
            return total += product.qty * product.price
        })
        setTotal(total);
    }

    return (
        <div className='cart--container'>
            <div className='cart--title--container'>
                <h3 className='cart--title'>My Cart ({qty} {qty > 1 || qty == 0 ? 'items' : 'item'})</h3>
                {qty >=1 && <p className='cart--subtotal'>Sub-total: £{total}</p>}
            </div>
        </div>
    )
}