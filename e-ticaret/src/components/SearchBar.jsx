import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar (){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/arama?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
};

return (
    <div className="search-bar">
      <FaSearch className="search-icon" onClick={handleSearch} />
      <input
        type="text"
        placeholder="Ürün Ara"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
