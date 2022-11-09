import { Link, Outlet } from "react-router-dom";
import './style.css';

function App() {
  return (
    <div>
      <nav className='nav'>
        <h1 className="nav--title">App</h1>
        <Link to='/home' className="nav--link">Home</Link>
        <Link to='/shop' className="nav--link">Shop</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
