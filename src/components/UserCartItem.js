import React from 'react'
import pictureSelector from '../utils/pictureSelector';
import { useCart } from '../contexts/CartContext';

export default function UserCartItem(props) {
    const { item } = props;
    const { incrementQty, decrementQty, removeFromCart } = useCart();
    
    const getQuantity = () => {
        return item.qty;
    }

    const increment = (information) => {
      incrementQty(information);
    }

    const decrement = (information => {
      decrementQty(information);
    })

  return (
    <div className='cart--item'>
        <img className='cart--item--img' src={pictureSelector(item.name)}></img>
        <h4 className='cart--item--title'>{item.name}</h4>
        <h4 className='cart--item--author'>{item.author}</h4>
        <h5 className='cart--item--price'>£{item.price}</h5>
        <div className='qty--ctrl'>
            <button className='amount--btn' onClick={() => decrement(item)}>-</button>
            <p className='current-qty'>{getQuantity(item.name)}</p>
            <button className='amount--btn' onClick={() => increment(item)}>+</button>
        </div>
    </div>
  )
}
