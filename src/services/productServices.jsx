const BASE_URL = import.meta.env.VITE_SERVER;

export async function getProducts() {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) throw new Error("Failed to fetch products");

    return res.json();
}