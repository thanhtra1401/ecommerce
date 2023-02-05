import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="row">
          <div className="col-3">
            <h3 className="footer__heading">Chấp nhận thanh toán</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Chuyển khoản ngân hàng
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Visa, Master Card
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Thanh toán khi nhận hàng
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h3 className="footer__heading">Hỗ trợ khách hàng</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Bảng báo giá
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Hình thức thanh toán
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Giao hàng & trả hàng
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Chính sách bảo hành
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Thuế GTGT
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Bảo mật thông tin
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  Hệ thống chi nhánh
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h3 className="footer__heading">Theo dõi</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  <i className="footer-item__link-icon fa-brands fa-facebook"></i>
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  <i className="footer-item__link-icon fa-brands fa-instagram"></i>
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="/help" className="footer-item__link">
                  <i className="footer-item__link-icon fa-brands fa-linkedin"></i>
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h3 className="footer__heading">Áo bóng đá trên</h3>
            <div className="footer__ads-img">
              <div className="footer_soical-img">
                <img
                  className="footer_soical-item"
                  src="https://iweb.tatthanh.com.vn/pic/12/menu/images/2(2).png"
                  alt="footer_ads"
                />
                <img
                  className="footer_soical-item"
                  src="https://iweb.tatthanh.com.vn/pic/12/menu/images/1(1).png"
                  alt="footer_ads"
                />
                <img
                  className="footer_soical-item"
                  src="https://iweb.tatthanh.com.vn/pic/12/menu/images/3(2).png"
                  alt="footer_ads"
                />
                <img
                  className="footer_soical-item"
                  src="https://iweb.tatthanh.com.vn/pic/12/menu/images/4(2).png"
                  alt="footer_ads"
                />
              </div>
              <img
                src="https://iweb.tatthanh.com.vn/pic/12/menu/images/bct.jpg"
                alt="footer_ads"
              />
            </div>
          </div>
        </div>
      </Container>
      <div class="footer__bottom">
        <p class="footer__text">
          © 2023 - Bản quyền thuộc về Công ty TNHH Aobongda.net
        </p>
      </div>
    </footer>
  );
};

export default Footer;
