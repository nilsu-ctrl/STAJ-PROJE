import { addToCart } from "../services/api";

function ProductCard({ product }) {
  const handleAddToCart = async () => {
    try {
      await addToCart(product._id);
      alert(`${product.title} sepete eklendi!`);
    } catch (error) {
      console.error("Sepete eklenemedi:", error);
      alert("Ürün sepete eklenemedi.");
    }
  };

  const handleViewDetails = () => {
    alert(
      `${product.title}\n${product.description}\nFiyat: ${product.price}₺`
    );
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-56 overflow-hidden">
        <img
          src={product.imgSrc}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>

        <div className="card-actions flex gap-3">
          <button
            className="btn btn-primary flex-1"
            onClick={handleViewDetails}
          >
            Detayları Gör
          </button>

          <button
            className="btn btn-secondary flex-1"
            onClick={handleAddToCart}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;