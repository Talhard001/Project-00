export const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products"); // backend endpoint
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
