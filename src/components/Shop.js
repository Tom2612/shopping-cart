import Item from "./Item";


export default function Shop(props) {
    return (
      <div>
        <h2>Shop</h2>
        <Item addToCart={props.addToCart}/>
      </div>
    );
  }