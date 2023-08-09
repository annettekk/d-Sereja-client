import "./Reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Admin from "./Pages/Admin/Admin";
import Gallery from "./Pages/Gallery/Gallery";
import CartModal from "./Components/CartModal/CartModal";
import { useState } from "react";

function App() {

  const [cartModal, setcartModal] = useState(false);

  function handleCartModal() {
    setcartModal(!cartModal);
  }

  function closeCartModal() {
    setcartModal(!cartModal);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleCartModal={handleCartModal}></Header>
        {cartModal && (
          <CartModal closeCartModal={closeCartModal} />
        )}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/gallery"
            element={<Gallery  />}
          ></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
