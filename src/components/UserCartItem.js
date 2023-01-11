import React from 'react'
import pictureSelector from '../utils/pictureSelector';

export default function UserCartItem(props) {
    const { item } = props;
  return (
    <div className='cart--item'>
        <img className='cart--item--img' src={pictureSelector(item.name)}></img>
        <h4 className='cart--item--title'>{item.name}</h4>
        <h4 className='cart--item--author'>{item.author}</h4>
    </div>
  )
}
