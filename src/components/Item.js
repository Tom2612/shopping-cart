import React from 'react';
import '../styles/Item.css';

export default function Item(props) {
    const { name, price, img } = props;
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
                <img src={img} />
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