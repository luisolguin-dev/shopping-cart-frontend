export default function ProductCard({product}) {
    return (
        <div>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
    )

}