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

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            <Route
              path="/admin"
              element={<ProtectedRoute component={Admin} />}
            />

            <Route
              path="/admin/products"
              element={<ProtectedRoute component={Products} />}
            />
            <Route path="/productDetail" element=<ProductDetailPage /> />
          </Routes>
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
