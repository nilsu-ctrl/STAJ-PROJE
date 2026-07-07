
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard"; 


function Product() {
const [items, setItems] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setItems(response.data);
      } 
      catch (error) {
        console.error("Ürünler alınamadı:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
   <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>



  );
}

export default Product;

