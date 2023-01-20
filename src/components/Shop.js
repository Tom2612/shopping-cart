import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from '../contexts/CartContext';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState([]);
  const [dataFetch, setDataFetch] = useState(false);

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  //Products stored in firestore with IDs
  const [products, setProducts] = useState([]);

  //Grabs product data from firestore and stores it in products
  useEffect(() => {
    const fetchData = async () => {
      const fetchData = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
      fetchData.push({...doc.data(), id: doc.id});
    });
    setProducts(fetchData);
    }

    fetchData();
  }, [])

  //Get user cart information
  useEffect(() => {
    const getUserCart = async() => {
      const arr = [];
      const cartRef = collection(db, `user ${currentUser.uid}`);
      const cartSnap = await getDocs(cartRef);
        cartSnap.forEach((doc) => {
          console.log('User cart', doc.data());
          arr.push(doc.data());
        });     
        // change cart display qty and work out total?
    };

    getUserCart();

  }, [dataFetch]);

  const addToUserCart = async (information) => {
    //Start again here
    if (!currentUser) {
      return navigate('/signin', {state: {previousUrl: '/shop'}});
    };
    await addToCart(information) 
  }

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
            <Cart cart={cart} total={total} qty={qty}/>
          </div>
        </div>
        <div className='list--container'>
          {
            products.map(product => {
              return <Item
                information={product} 
                key={product.id}
                addToCart={addToUserCart}
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