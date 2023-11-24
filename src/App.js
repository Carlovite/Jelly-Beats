import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import NavbarComponent from "./components/NavbarComponent";
import Profile from "./components/pages/ProfilePage";
import "../src/assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import ShoppingCartPage from "./components/pages/ShoppingCartPage";
import UploadPage from "./components/pages/UploadPage";
import NavbarMobile from "./components/NavbarMobile";
import Details from "./components/pages/Details";
import TracksPage from "./components/pages/TracksPage";
import LogoComponent from "./components/LogoComponent";
import LogInPage from "./components/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <NavbarComponent></NavbarComponent>

        <LogoComponent></LogoComponent>

        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<Details></Details>} path="/details-page"></Route>
          <Route element={<UploadPage></UploadPage>} path="/upload"></Route>
          <Route element={<Profile></Profile>} path="/profile"></Route>
          <Route element={<TracksPage></TracksPage>} path="/tracks"></Route>
          <Route element={<LogInPage></LogInPage>} path="/login"></Route>
          <Route
            element={<ShoppingCartPage></ShoppingCartPage>}
            path="/shopping-cart"
          ></Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
        <NavbarMobile></NavbarMobile>
        {/* <footer className="text-center fixed-bottom mb-3 text-secondary">
          BEATS {new Date().getFullYear()}
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
