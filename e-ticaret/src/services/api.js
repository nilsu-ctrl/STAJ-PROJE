import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});


export const getProducts = () => API.get("/products");

export const register = (userData) =>
  API.post("/auth/register", userData);

export const login = (userData) =>
  API.post("/auth/login", userData);

export const getCart = () => API.get("/cart");

export const addToCart = (productId) =>
  API.post("/cart", { productId });

export const removeFromCart = (cartId) =>
  API.delete(`/cart/${cartId}`);

export const clearCart = () =>
  API.delete("/cart");

export default API;