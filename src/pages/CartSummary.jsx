import { calculateTotals } from "../utils/calculateCart";
import { useCart } from "../hooks/useCart"
export function CartSummary() {
    const { items } = useCart()
    const { bruto, impuesto, neto } = calculateTotals(items);

    return (
        <div>
            <p>Bruto: ${bruto}</p>
            <p>Impuesto: ${impuesto}</p>
            <p>Neto: ${neto}</p>
        </div>
    )
}