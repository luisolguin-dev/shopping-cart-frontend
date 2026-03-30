import { useCart } from "../hooks/useCart"
import { calculateTotals } from "../utils/calculateCart";

export function CartCard() {
    const { items } = useCart();
   const { bruto, impuesto, neto } = calculateTotals(items);

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}          
                    </li>

                ))}
            </ul>
            <p>Bruto {bruto}</p>
            <p>Impuesto {impuesto} </p>
            <p>Neto {neto} </p>

        </div>
    )
}