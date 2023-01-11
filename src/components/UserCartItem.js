import React from 'react'
import pictureSelector from '../utils/pictureSelector';

export default function UserCartItem(props) {
    const { item } = props;
    
    const getQuantity = () => {
        return item.qty;
    }

  return (
    <div className='cart--item'>
        <img className='cart--item--img' src={pictureSelector(item.name)}></img>
        <h4 className='cart--item--title'>{item.name}</h4>
        <h4 className='cart--item--author'>{item.author}</h4>
        <h5 className='cart--item--price'>£{item.price}</h5>
        <div className='qty--ctrl'>
            <button className='amount--btn' onClick={() => props.decrement(item.name)}>-</button>
            <p className='current-qty'>{getQuantity(item.name)}</p>
            <button className='amount--btn' onClick={() => props.increment(item.name)}>+</button>
        </div>
    </div>
  )
}
