import React from 'react';
import '../styles/Cart.css';

export default function Cart(props) {

    return (
        <div className='cart--container'>
            <div className='cart--title--container'>
                <h3 className='cart--title'>My Cart ({props.qty} {props.qty > 1 || props.qty == 0 ? 'items' : 'item'})</h3>
                {props.qty >=1 && <p className='cart--subtotal'>Sub-total: £{props.total}</p>}
            </div>
        </div>
    )
}