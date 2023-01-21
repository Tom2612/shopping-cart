import React from 'react';
import pictureSelector from '../utils/pictureSelector';
import { useCart } from '../contexts/CartContext';

export default function Item(props) {
    const { information } = props;
    const { addToCart } = useCart();

    function add(information) {
        addToCart(information);
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
                <button className='add-btn' onClick={() => add(information)}>Add to cart</button>
                
            </div>         
        </div>
    )
}