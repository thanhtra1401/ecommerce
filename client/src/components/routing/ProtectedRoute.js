import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  if (isAuthenticated) {
    return <Component />;
  } else {
    alert("Bạn cần phải đăng nhập");
    navigate("/login");
  }
};

export default ProtectedRoute;
