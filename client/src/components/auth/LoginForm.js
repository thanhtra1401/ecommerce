import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
const LoginForm = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginForm;
  const handleChange = (event) => {
    return setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        navigate("/");
      }
      if (loginData.success === false) {
        Swal.fire({
          text: loginData.message,
          icon: "error",
          confirmButtonText: "Thử lại",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="mb-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={email}
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            value={password}
            name="password"
            placeholder="Mật khẩu"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" type="submit">
            Đăng nhập
          </Button>
        </Form.Group>
      </Form>

      <p style={{ display: "flex", justifyContent: "center" }}>
        Bạn chưa có tài khoản?
        <Link to="/register">
          <Button variant="info" size="sm" className="ms-2">
            Đăng ký
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
