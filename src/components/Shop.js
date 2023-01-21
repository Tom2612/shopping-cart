import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

export default function Shop() {
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState([]);

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
  }, []);

    return (
      <div className='shop--container'>
        <div className='shop--info'>
          <h2>Browse all titles</h2>
          <div>
            {/* <Cart cart={cart} total={total} qty={qty}/> */}
          </div>
        </div>
        <div className='list--container'>
          {products.map(product => {
              return <Item
                information={product} 
                key={product.id}
              />
            })
          }
        </div>
      </div>
    );
  }