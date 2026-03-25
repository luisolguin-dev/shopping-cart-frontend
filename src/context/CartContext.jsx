import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(product) {
        const exists = items.find(item => item.id === product.id);
        if (exists) {
            setItems(items.map( item =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ))
        } else {
            setItems([...items, {...product, quantity:1}])
        }
    }
    
    function removeItem(productId) {
        setItems(items.filter(item => item.id !== productId))
    }

    function clearCart() {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

