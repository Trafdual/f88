import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
  };

  const banners = [
    "/239fb67cf5c148b9bdb9842902927b4e.jpg",
    "/3da34fd513db4a25bd5ccf681f750b34.jpg",
    "/4cdbd8838ee242b09abc465bfbf81454.jpg",
  ];

  return (
    <div className="banner-pages">
      <Slider {...settings}>
        {banners.map((image, index) => (
          <div className="item-banner" key={`banner-${index}`}>
            <Link to="#">
              <div className="banner-img">
                <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
