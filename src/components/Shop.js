import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'
import { useState } from "react";
import { fakeData } from "../utils/Data";

export default function Shop(props) {
  const { cart, total } = props;
  const [data, setData] = useState(fakeData);
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [qty, setQty] = useState([]);

  // const addToCart = (name, price) => {
  //   const exists = cart.find(item => item.name === name);
  //   if(exists) {
  //     return;
  //   } else {
  //     SpeechRecognitionAlternative((prev) => {
  //       return [...prev, { name, price, quantity: 1}];
  //     });
  //   };
  // };

  // const handleChange = (name, e) => {
  //   setCart((prev) => {
  //     return prev.map(item => (item.name === name ? { ...item, quantity: e.target.value } : item))''
  //   });
  // };

  // const increment = (name) => {
  //   setCart((prev) => {
  //     return prev.map(item => ( item.name === name ? {...item, quantity: item.quantity + 1 } : item));
  //   });
  // };

  // const decrement = (name) => {
  //   const foundItem = cart.find(item => item.name === name);
  //   if (!foundItem){
  //     console.log('no such item');
  //     return;
  //   } else if (foundItem.quantity === 1) {
  //     const newCart = cart.filter(item => item !== foundItem);
  //     setCart(newCart);
  //   } else {
  //     setCart(prev => {
  //       return prev.map(item => (item.name === name ? {...item, quantity: item.quantity - 1} : item
  //       ));
  //     });
  //   }
  // }

    return (
      <div className='shop--container'>
        <div className='shop--info'>
          <h2>Browse all titles</h2>
          <div>
            {cart.length > 0 ? <Cart cart={cart} total={total} qty={props.qty}/> : <h3 className='cart--container cart--title'>Cart (0 Items)</h3>}
          </div>
        </div>
        <div className='list--container'>
          {props.fakeData.map(item => {
            return <Item
                key={item.name}
                name={item.name} 
                price={item.price}
                author={item.author}
                img={item.img}
                addToCart={props.addToCart} 
                increment={props.increment} 
                decrement={props.decrement} 
                cart={props.cart} 
                handleChange={props.handleChange}
              />
            })
          }
        </div>
      </div>
    );
  }