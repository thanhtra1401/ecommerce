import React from "react";
import { Container } from "react-bootstrap";
import "./UserNav.css";
const UserNav = () => {
  return (
    <div className="category">
      <Container>
        <ul className="category__list">
          <li className="category__item ">Trang chủ</li>
          <li className="category__item ">
            Áo đội tuyển quốc gia
            <ul className="national_list">
              <li className="national_item">Áo World Cup 2022</li>
              <li className="national_item">Áo đội tuyển châu Âu</li>
              <li className="national_item">Áo đội tuyển châu Mỹ</li>
              <li className="national_item">Áo đội tuyển châu Phi</li>
              <li className="national_item">Áo đội tuyển châu Á</li>
            </ul>
          </li>

          <li className="category__item">
            Áo câu lạc bộ
            <ul className="club_list">
              <li className="club_item">Giải Ngoại hạng Anh (Pr.League)</li>
              <li className="club_item">Giải Tây Ban Nha (Laliga)</li>
              <li className="club_item">Giải Ý (Serie A)</li>
              <li className="club_item">Giải Đức (Bundesliga)</li>
              <li className="club_item">Giải Pháp (Ligue 1)</li>
              <li className="club_item">CLB khác</li>
            </ul>
          </li>
          <li className="category__item">Giày bóng đá</li>
          <li className="category__item">Áo khoác</li>
          <li className="category__item">Áo dài tay</li>
          <li className="category__item">Phụ kiện</li>
          <li className="category__item">Hệ thống chi nhánh</li>
        </ul>
      </Container>
    </div>
  );
};

export default UserNav;
