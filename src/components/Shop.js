import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'

export default function Shop(props) {
  const { cart, total } = props;
    return (
      <div className='shop--container'>
        <h2>Shop</h2>
        <div className="cart--container">
          {cart.length > 0 && <Cart cart={cart} total={total}/>}
        </div>
        <div className='list--container'>
          {props.fakeData.map(item => {
            return <Item 
                name={item.name} 
                price={item.price} 
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