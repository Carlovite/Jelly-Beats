import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import NavbarComponent from "./components/NavbarComponent";
import Profile from "./components/Profile";
import "../src/assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ShoppingCart from "./components/ShoppingCart";
import UploadPage from "./components/UploadPage";
import NavbarMobile from "./components/NavbarMobile";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <NavbarComponent></NavbarComponent>
        <NavbarMobile></NavbarMobile>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<Details></Details>} path="/tracks"></Route>
          <Route element={<UploadPage></UploadPage>} path="/upload"></Route>
          <Route element={<Profile></Profile>} path="/profile"></Route>
          <Route
            element={<ShoppingCart></ShoppingCart>}
            path="/shopping-cart"
          ></Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
        {/* <footer className="text-center fixed-bottom mb-3 text-secondary">
          BEATS {new Date().getFullYear()}
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
