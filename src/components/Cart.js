import React from 'react';
import '../styles/Cart.css';

export default function Cart(props) {
    return(
        <div className='cart--container'>
            <div className='cart--title--container'>
                <h3 className='cart--title'>Cart ({props.cart.length} {props.cart.length > 1 ? 'items' : 'item'})</h3>
                <p className='cart--subtotal'>Sub-total: {props.total}</p>
            </div>
            <div className='cart--detail'>
            {/* {props.cart.map(item => {
                return (
                    <>
                        <p className='cart--name'>{item.name}</p>
                        <p>qty: {item.quantity}</p>
                    </>
                )
                
            })} */}
            </div>
        </div>
    )
}