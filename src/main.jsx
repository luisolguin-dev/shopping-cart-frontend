import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider>
      <CartProvider>
          <App />
        </CartProvider>
    </ClerkProvider>
  </StrictMode>,
)
