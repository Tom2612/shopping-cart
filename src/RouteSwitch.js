import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";

const RouteSwitch = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='shop' element={<Shop addToCart={props.addToCart} />} />
                    <Route path='*' element={<p>Woops, nothing here!</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;