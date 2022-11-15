import React from 'react';

export default function Cart(props) {
    return(
        <div className='cart--container'>
            <h3>Cart ({props.cart.length} {props.cart.length > 1 ? 'items' : 'item'})</h3>
            {props.cart.map(item => {
                return (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                )
            })}
        </div>
    )
}