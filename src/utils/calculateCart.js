export function calculateTotals(items) {
    const bruto = items.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

    const impuesto = bruto * 0.15;
    const neto = bruto - impuesto;

    return { bruto, impuesto, neto }
}