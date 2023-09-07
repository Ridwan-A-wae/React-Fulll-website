import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import './components/navbar/navbar.css'

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Donate from "./pages/Donate/Donate";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";
import Books from "./components/books/Books";
import Accessories from "./components/accessories/Accessories";
import Packs from "./components/packs/Packs";
import Tents from "./components/tents/Tents";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/books" element={<Books />} />
        <Route path="/shop/accessories" element={<Accessories />} />
        <Route path="/shop/packs" element={<Packs />} />
        <Route path="/shop/tents" element={<Tents />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
