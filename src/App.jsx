import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';
import { ProductList } from './pages/ProductList';
import { CartSummary } from './pages/CartSummary';

function App() {
  return (
    <>
  <BrowserRouter>
     <header>
      <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
      </Show>
      <Show when="signed-in">
          <UserButton />
      </Show>
     </header>

     <Routes> 
      <Route path='/' element={<ProductList />}/>
      <Route path='/cart' element={<CartSummary />}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
