import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'
import { useEffect, useState } from "react";
import { fakeData } from "../utils/Data";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

export default function Shop() {
  const [data, setData] = useState(fakeData);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState([]);

  //Products stored in firestore with IDs
  const [products, setProducts] = useState([]);

  //Grabs the products in firestore and stores them in products
  useEffect(() => {
    const fetchData = async () => {
      const fetchData = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
      fetchData.push(doc.data());
    });
    setProducts(fetchData);
    }

    fetchData();
  }, [])

  useEffect(() => {
    setTotal(cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0).toFixed(2));
    setQty(cart.map(item => item.quantity).reduce((a, b) => a + b, 0));
  }, [cart]);

  const addToCart = (name, price) => {
    const exists = cart.find(item => item.name === name);
    if(exists) {
      return;
    } else {
      setCart((prev) => {
        return [...prev, { name, price, quantity: 1}];
      });
    };
  };

  const handleChange = (name, e) => {
    setCart((prev) => {
      return prev.map(item => (item.name === name ? { ...item, quantity: e.target.value } : item));
    });
  };

  const increment = (name) => {
    setCart((prev) => {
      return prev.map(item => ( item.name === name ? {...item, quantity: item.quantity + 1 } : item));
    });
  };

  const decrement = (name) => {
    const foundItem = cart.find(item => item.name === name);
    if (!foundItem){
      console.log('no such item');
      return;
    } else if (foundItem.quantity === 1) {
      const newCart = cart.filter(item => item !== foundItem);
      setCart(newCart);
    } else {
      setCart(prev => {
        return prev.map(item => (item.name === name ? {...item, quantity: item.quantity - 1} : item
        ));
      });
    }
  }

    return (
      <div className='shop--container'>
        <div className='shop--info'>
          <h2>Browse all titles</h2>
          <div>
            {cart.length > 0 ? <Cart cart={cart} total={total} qty={qty}/> : <h3 className='cart--container cart--title'>Cart (0 Items)</h3>}
          </div>
        </div>
        <div className='list--container'>
          {data.map(item => {
            return <Item
                key={item.name}
                name={item.name} 
                price={item.price}
                author={item.author}
                img={item.img}
                addToCart={addToCart} 
                increment={increment} 
                decrement={decrement} 
                cart={cart} 
                handleChange={handleChange}
              />
            })
          }
        </div>
      </div>
    );
  }