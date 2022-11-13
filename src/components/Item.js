import React from 'react';
import '../styles/Item.css';

export default function Item(props) {
    const { name, price } = props;
    return(
        <div className='item--container'>
            <h4 className='item--name'>{name}</h4>
            <h4 className='item--price'>{price}</h4>
            <button className='add-btn' onClick={(e) => props.addToCart(name, price, e)}>Add to cart</button>
        </div>
    )
}