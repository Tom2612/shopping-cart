import React from 'react';
import '../styles/Item.css';
import pictureSelector from '../utils/pictureSelector';
import picture from '../pictures/Dune.png';

export default function Item(props) {
    const { name, price, author } = props;
    const { cart } = props;

    function buttons(name) {
        const currentItems = props.cart.map(item => item.name);
        if (currentItems.includes(name)) {
            return true;
        } else return false;
    }

    function getQuantity(name) {
        return cart.map(item => {
            if (item.name === name) {
                return item.quantity;
            }
        })
    }

    return(
        <div className='item--container'>
            <div className='information'>
                <h4 className='item--name'>{name}</h4>
                <h4 className='item--author'>{author}</h4>
                <img className='item--img' src={pictureSelector(name)} />
                <h4 className='item--price'>£{price}</h4>
            </div>
            <div className='btns'>
                {buttons(name) ?
                    (<div className='qty--ctrl'>
                        <button className='amount--btn' onClick={() => props.decrement(name)}>-</button>
                        <p className='current-qty'>{getQuantity(name)}</p>
                        <button className='amount--btn' onClick={() => props.increment(name)}>+</button>
                    </div>)                  
                :
                    <button className='add-btn' onClick={() => props.addToCart(name, price)}>Add to cart</button> 
                }   
            </div>         
        </div>
    )
}