import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Products from "./pages/Admin/Products";
import ProductContextProvider from "./context/ProductContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartContextProvider from "./context/CartContext";

import Cart from "./pages/Cart/Cart";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={<ProtectedRoute component={ProfilePage} />}
              />
              <Route
                path="/admin"
                element={<ProtectedRoute component={Admin} />}
              />

              <Route
                path="/admin/products"
                element={<ProtectedRoute component={Products} />}
              />
              <Route path="/product/:id" element=<ProductDetailPage /> />
              <Route path="/cart" element=<Cart /> />
            </Routes>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
