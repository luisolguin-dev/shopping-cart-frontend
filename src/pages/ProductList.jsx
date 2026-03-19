import { useProducts } from "../hooks/useProducts";

export default function ProductList() {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong {error.messsge}</p>

    return (
        <div>
            <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>
        </div>
    )

}