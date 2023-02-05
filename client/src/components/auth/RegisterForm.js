import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, phoneNumber, email, password, confirmPassword } = registerForm;
  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Mật khẩu nhắc lại không trùng khớp",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    try {
      const registerData = await registerUser(registerForm);
      if (registerData.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: registerData.message,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/login");
      }
      if (registerData.success === false) {
        Swal.fire({
          text: registerData.message,
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
            name="name"
            placeholder="Họ tên"
            required
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="phoneNumber"
            placeholder="Số điện thoại"
            required
            value={phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Mật khẩu"
            required
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            required
            value={confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" type="submit">
            Đăng ký
          </Button>
        </Form.Group>
      </Form>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Bạn đã có tài khoản?
        <Link to="/login">
          <Button variant="info" size="sm" className="ms-2">
            Đăng nhập
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
