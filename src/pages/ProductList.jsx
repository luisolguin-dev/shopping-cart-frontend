import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong {error.messsge}</p>

    return (
        <div>
            {products.map((product) => (
                 <ProductCard product={product} />
            ))}
        </div>
    )
}