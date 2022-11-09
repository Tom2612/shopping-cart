import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Link to='/home'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Outlet />
    </div>
  );
}

export default App;
