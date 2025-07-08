// Importamos los hooks de React y las rutas de React Router
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importamos las páginas de nuestra aplicación
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Pago from "./pages/Pago";
import Login from "./pages/Login";
import Test from "./pages/Test";

// Importamos el provider del carrito, que nos da acceso global al carrito
import { CartProvider } from "./context/CartContext";

// Componente principal de toda la app
function App() {
  return (
    // Todo lo que esté dentro de CartProvider puede acceder al contexto del carrito
    <CartProvider>
      <Router>
        <Routes>
          {/* Ruta principal (home) */}
          <Route path="/" element={<Home />} />

          {/* Detalle de cada producto */}
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />

          {/* Página del carrito de compras */}
          <Route path="/Cart" element={<Cart />} />

          {/* Página donde se llena el formulario para enviar el pedido por WhatsApp */}
          <Route path="/Pago" element={<Pago />} />

          {/* Página de login (si decides usarla después) */}
          <Route path="/Login" element={<Login />} />

          {/* Ruta de prueba o componente temporal */}
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
