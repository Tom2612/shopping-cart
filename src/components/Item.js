import React from 'react';
import '../styles/Item.css';

export default function Item(props) {
    return(
        <div className='item--container'>
            <h4 className='item--title'>Carrots</h4>
            <h4 className='item--price'>0.8</h4>
            <button className='add-btn' onClick={() => props.addToCart('Carrots')}>Add to cart</button>
        </div>
    )
}