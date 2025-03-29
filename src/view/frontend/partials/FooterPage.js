/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterFixed from "../components/FooterFixed";

const FooterPage = ({login}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brandImages = [
    "/nhacungcap1.webp",
    "/nhacungcap2.webp",
    "/nhacungcap3.webp",
    "/nhacungcap4.webp",
    "/nhacungcap5.webp",
    "/nhacungcap6.webp",
    "/nhacungcap7.webp",
    "/nhacungcap8.webp",
    "/nhacungcap9.webp",
    "/nhacungcap10.webp",
    "/nhacungcap11.webp",
    "/nhacungcap12.webp",
    "/nhacungcap13.webp",
    "/nhacungcap14.webp",
    "/nhacungcap15.webp",
    "/nhacungcap16.webp",
  ];

  return (
    <footer>
      <FooterFixed login={login}></FooterFixed>
      <div className="ctnr">
        <div className="footer-top">
          <div className="logo-footer">
            <Link>
              <img src="/812ee25a09813ea702fb26170cc3c0d3.png" alt="" />
            </Link>
          </div>
          <div className={`desc-footer-top ${isExpanded ? "active" : ""}`}>
            <span>
              F8BET là một nhà cái có giấy phép cá cược trực tuyến hợp pháp do
              Isle of Man và Khu kinh tế Cagayan and Freeport cấp. Với bề dày
              kinh nghiệm và danh tiếng phục vụ hơn 10 triệu người chơi, F8BET
              đã và đang khẳng định vị thế của mình trên thị trường game trực
              tuyến. Với tư cách là một công ty trò chơi trực tuyến có trụ sở
              tại Luân Đôn, Anh, sở hữu đội ngũ nhân tài chuyên nghiệp đông đảo
              cung cấp sản phẩm phục vụ chất lượng cao. F8BET đảm bảo không tiết
              lộ thông tin cá nhân khách hàng cho bất kỳ bên thứ ba nào, sử dụng
              tiêu chuẩn mã hoá dữ liệu ở mức cao nhất. Tất cả thông tin cá nhân
              đều được thông qua hệ thống bảo mật - Secure Socket (Chuẩn mã hóa
              SS 128-bit), đồng thời được bảo vệ trong môi trường quản lý an
              toàn đảm bảo không thể truy cập từ các khu vực mạng công cộng. Tất
              cả dữ liệu ra vào đều bị hạn chế, giám sát nghiêm ngặt và quản lý
              chặt chẽ nhằm mang đến cho người chơi trải nghiệm người dùng an
              toàn tuyệt đối.
            </span>
            <span className="show-footer-top" onClick={() => setIsExpanded(!isExpanded)} >
              <div className="btn-xemthem">
              {isExpanded ? "Thu gọn" : "Xem thêm"}
              </div>
              <div className="close-footer">
                  <img src="/thugon.jpg" />
              </div>
            </span>
          </div>
        </div>

        <div className="footer-center-brand">
          <div className="list-brand-footer">
            <Slider {...settings}>
              {brandImages.map((img, index) => (
                <div className="item-brand" key={index}>
                  <a href="#">
                    <img src={img} alt={`Brand ${index + 1}`} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="list-category-footers">
          <div className="box-category-footers">
            <ul>
              <li>
                <Link>Điều khoản và điều kiện</Link>
              </li>
              <li>
                <Link>Giới thiệu về F8BET</Link>
              </li>
              <li>
                <Link>Chơi có trách nhiệm</Link>
              </li>
              <li>
                <Link>Miễn trách nhiệm</Link>
              </li>
              <li>
                <Link>Quyền riêng tư tại F8BET</Link>
              </li>
              <li>
                <Link>Những câu hỏi thường gặp</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="coppy-right-footer">
          <span>Copyright © F8BET.COM Reserved </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
