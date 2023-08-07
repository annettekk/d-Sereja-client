import "./Reset.css"
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Gallery from "./Pages/Gallery/Gallery"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
