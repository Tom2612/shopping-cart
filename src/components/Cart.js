import React from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {    
    const { qty, total } = useCart();

    return (
        <div className='cart--container'>
            <div className='cart--title--container'>
                <h3 className='cart--title'>My Cart ({qty} {qty > 1 || qty === 0 ? 'items' : 'item'})</h3>
                {qty >=1 && <p className='cart--subtotal'>Sub-total: £{total}</p>}
            </div>
        </div>
    )
}