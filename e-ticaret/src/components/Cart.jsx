import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  clearCart,
} from "../services/api";

function Cart() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
    } catch (error) {
      console.error("Sepet alınamadı:", error);
    }
  };

  useEffect(() => {
  const loadCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
    } catch (error) {
      console.error("Sepet alınamadı:", error);
    }
  };

  loadCart();
}, []);

  const handleRemove = async (cartId) => {
    try {
      await removeFromCart(cartId);
      fetchCart();
    } catch (error) {
      console.error("Ürün silinemedi:", error);
    }
  };

  const handleClear = async () => {
    try {
      await clearCart();
      fetchCart();
    } catch (error) {
      console.error("Sepet temizlenemedi:", error);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Sepetim ({cart.length})
      </h2>

      {cart.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center mb-2"
        >
          <span>
            {item.product.title} x{item.quantity}
          </span>

          <button
            className="btn btn-sm btn-error font-bold"
            onClick={() => handleRemove(item._id)}
          >
            Kaldır
          </button>
        </div>
      ))}

      <p className="font-bold mt-4">
        Toplam: {total}₺
      </p>

      {cart.length > 0 && (
        <button
          className="btn btn-outline font-bold mt-4"
          onClick={handleClear}
        >
          Sepeti Boşalt
        </button>
      )}
    </div>
  );
}

export default Cart;