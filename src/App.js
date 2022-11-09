import { Link, Outlet } from "react-router-dom";
import './style.css';

function App() {
  return (
    <div>
      <nav className='nav' data-testid="nav-title">
        <h1 className="nav--title">Shopping Cart App</h1>
        <Link to='/home' className="nav--link">Home</Link>
        <Link to='/shop' className="nav--link">Shop</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
