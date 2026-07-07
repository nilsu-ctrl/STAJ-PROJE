import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar"
function Navbar (){
  
    const navigate = useNavigate();
 
    return(
        <>
       <header> 
      
         <div> 
            <div className="nav-bar">
               <Link to="/">
                <img
                      className="logo"
                      src="/images/pearly_logo.png"
                       alt="Pearly Logo" />
               </Link>
               <SearchBar/>
                <button className="cart" onClick={() => navigate("/cart")}> <FaShoppingCart size={30}/> </button>
            <Link to="/login" className="font-bold">  Giriş Yap
                </Link>
            <Link to="/register" className="font-bold"> Kayıt Ol 
                </Link>
           
                

        </div>

       <div className="nav-bar-wrapper">

    <Link to="/products/tshirt" className="items">
        Tişört/Bluz
    </Link>

    <Link to="/products/pantolon" className="items">
        Pantolon
    </Link>

    <Link to="/products/elbise" className="items">
        Elbise
    </Link>

    <Link to="/products/ayakkabi" className="items">
        Ayakkabı
    </Link>

</div>

         </div>
        
        </header> 
        
        </>
    )
} 
export default Navbar


