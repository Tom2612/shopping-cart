import Item from "./Item";
import Cart from "./Cart";
import '../styles/Shop.css'

export default function Shop(props) {
  const { cart, total } = props;
    return (
      <div className='shop--container'>
        <div className='shop--info'>
          <h2>Browse all titles</h2>
          <div>
            {cart.length > 0 ? <Cart cart={cart} total={total}/> : <h3 className='cart--container cart--title'>Cart (0 Items)</h3>}
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