import React from 'react';
import '../styles/Item.css';
import pictureSelector from '../utils/pictureSelector';

export default function Item(props) {
    const { information } = props;
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
                <h4 className='item--name'>{information.name}</h4>
                <h4 className='item--author'>{information.author}</h4>
                <img className='item--img' src={pictureSelector(information.name)} />
                <h4 className='item--price'>£{information.price}</h4>
            </div>
            <div className='btns'>
                <button className='add-btn' onClick={() => props.addToCart(information)}>Add to cart</button>  
            </div>         
        </div>
    )
}