import './App.css'
import Navbar from './components/Navbar'; 
import Product from './components/Product'; 
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return ( 
     <>
    <Navbar/>

    <Routes>
    <Route path="/" element={<Product/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/arama" element={<SearchResults />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/products/:category" element={<Product />} />


</Routes>
 </>

  );
}
export default App;
  
