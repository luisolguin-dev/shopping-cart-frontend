import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export function ProductList() {
    const navigate = useNavigate();
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong {error.messsge}</p>

    return (
        <div>
            {products.map((product) => (
                 <ProductCard key={product.id} product={product} />
            ))}
            <section>
                <button onClick={() => navigate("/cart")}>Ver Carrito</button>
            </section>
        </div>
    )
}