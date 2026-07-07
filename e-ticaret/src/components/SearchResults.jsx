import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        setItems(response.data);
      } catch (error) {
        console.error("Ürünler alınamadı:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = items.filter((item) =>
    item.category.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))
  );

  return (
    <div className="search-results">
      <h2>
        "{query}" için arama sonuçları ({filteredProducts.length})
      </h2>

      {filteredProducts.length === 0 ? (
        <p>Aradığınız kritere uygun ürün bulunamadı.</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;