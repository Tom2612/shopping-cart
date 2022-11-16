import Item from "./Item";


export default function Shop(props) {
    return (
      <div>
        <h2>Shop</h2>
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
    );
  }