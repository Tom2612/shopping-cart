import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, setDoc, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userHasCart, setUserHasCart] = useState(false);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  //Products stored in firestore with IDs
  const [products, setProducts] = useState([]);

  //Grabs product data from firestore and stores it in products
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchData = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
      fetchData.push({...doc.data(), id: doc.id});
    });
    setProducts(fetchData);
    console.log(products);
    setLoading(false);
    }

    fetchData();
  }, [])

  useEffect(() => {
    const checkUserHasCart = async() => {
      const cartRef = doc(db, 'users', currentUser.uid);
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
        console.log('User has cart')
        setUserHasCart(true);
      } else {
        console.log('User has no cart')
        return;
      }
    };

    checkUserHasCart();

  }, [loading])

  const addToUserCart = async (name, price) => {
    setLoading(true);
    if (!currentUser) {
      return navigate('/signin', {state: {previousUrl: '/shop'}});
    };

    const userProduct = {
      name: name,
      price: price,
      qty: 1
    }

    const docRef = doc(db, 'users', currentUser.uid);

    //Check user has cart, make one if not.
    if (!userHasCart) {
      try { 
        await setDoc(doc(db, 'users', currentUser.uid), userProduct);
        setLoading(false);
      }catch(e){
        console.log('failed to add product');
      }
    } else {
      //Check for product already in userCart, update accordingly.
      try {
        await updateDoc(docRef, { product: arrayUnion(userProduct) });
        console.log('added Product!')
      } catch(e) {
        console.log('could not upload product', e.message);
      }
    }
  }

  //Get rid of this and just add straight to firestore without anything on client-side!
  // const addToCart = (name, price) => {
  //   //Add authentication here - no user = no add to cart
  //   if (!currentUser) {
  //     return navigate('/signin', {state: {previousUrl: '/shop'}});
  //   }

  //   const exists = cart.find(item => item.name === name);
  //   if(exists) {
  //     return;
  //   } else {
  //     setCart((prev) => {
  //       return [...prev, { name, price, quantity: 1}];
  //     });
  //   };
  // };

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
                key={product.id}
                name={product.name}
                price={product.price}
                author={product.author}
                // img={product.img}
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