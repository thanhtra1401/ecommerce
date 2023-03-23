import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserNav.css";

const UserNav = () => {
  let pathname = window.location.pathname;
  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  return (
    <div className="category hide-on-mobile-tablet">
      <Container>
        <ul className="category__list">
          <Link to="/" className="category__item ">
            Trang chủ
          </Link>
          <Link
            to="/ao-doi-tuyen-quoc-gia"
            className={
              pathname.match("/ao-doi-tuyen-quoc-gia")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Áo đội tuyển quốc gia
            <ul className="national_list">
              <li className="national_item">Áo World Cup 2022</li>
              <li className="national_item">Áo đội tuyển châu Âu</li>
              <li className="national_item">Áo đội tuyển châu Mỹ</li>
              <li className="national_item">Áo đội tuyển châu Phi</li>
              <li className="national_item">Áo đội tuyển châu Á</li>
            </ul>
          </Link>

          <Link
            to="/ao-cau-lac-bo"
            className={
              pathname.match("/ao-cau-lac-bo")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Áo câu lạc bộ
            <ul className="club_list">
              <li className="club_item">Giải Ngoại hạng Anh (Pr.League)</li>
              <li className="club_item">Giải Tây Ban Nha (Laliga)</li>
              <li className="club_item">Giải Ý (Serie A)</li>
              <li className="club_item">Giải Đức (Bundesliga)</li>
              <li className="club_item">Giải Pháp (Ligue 1)</li>
              <li className="club_item">CLB khác</li>
            </ul>
          </Link>
          <Link
            to="/giay-bong-da"
            className={
              pathname.match("/giay-bong-da")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Giày bóng đá
          </Link>
          <Link
            to="/ao-khoac"
            className={
              pathname.match("/ao-khoac")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Áo khoác
          </Link>
          <Link
            to="/ao-dai-tay"
            className={
              pathname.match("/ao-dai-tay")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Áo dài tay
          </Link>
          <Link
            to="/phu-kien"
            className={
              pathname.match("/phu-kien")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Phụ kiện
          </Link>
          <Link
            to="/he-thong-chi-nhanh"
            className={
              pathname.match("/he-thong-chi-nhanh")
                ? "category__item-active category__item"
                : "category__item"
            }
          >
            Hệ thống chi nhánh
          </Link>
        </ul>
      </Container>
    </div>
  );
};

export default UserNav;
