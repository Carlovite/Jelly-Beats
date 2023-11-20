import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Profile from "./components/Profile";
import "../src/assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <NavbarComponent></NavbarComponent>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<Profile></Profile>} path="/profile"></Route>
          <Route
            element={<ShoppingCart></ShoppingCart>}
            path="/shopping-cart"
          ></Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
