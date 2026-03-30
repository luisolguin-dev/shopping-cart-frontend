import { useCart } from "../hooks/useCart";

export default function ProductCard({product}) {
  const { addItem } = useCart();
    return (
        <div>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>
            <p>{product.price}</p>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        </div>
    )

}