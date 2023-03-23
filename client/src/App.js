import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import AuthContextProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

import Products from "./pages/Admin/Products";
import ProductContextProvider from "./context/ProductContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartContextProvider from "./context/CartContext";

import Cart from "./pages/Cart/Cart";
import ProfilePage from "./pages/Profile";
import HomeCategory from "./pages/HomeCategory";

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
              <Route
                path="/ao-cau-lac-bo"
                element=<HomeCategory category="Ao CLB" />
              />
              <Route
                path="/ao-doi-tuyen-quoc-gia"
                element=<HomeCategory category="Ao doi tuyen" />
              />
              <Route
                path="/giay-bong-da"
                element=<HomeCategory category="Giay bong da" />
              />
              <Route
                path="/ao-khoac"
                element=<HomeCategory category="Ao khoac" />
              />
              <Route
                path="/ao-dai-tay"
                element=<HomeCategory category="Ao dai tay" />
              />
              <Route
                path="/phu-kien"
                element=<HomeCategory category="Phu kien" />
              />
              <Route
                path="/he-thong-chi-nhanh"
                element=<HomeCategory category="He thong chi nhanh" />
              />
            </Routes>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
