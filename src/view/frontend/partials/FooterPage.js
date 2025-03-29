/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function FooterPage () {
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
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  const brandImages = [
    '/nhacungcap1.webp',
    '/nhacungcap2.webp',
    '/nhacungcap3.webp',
    '/nhacungcap4.webp',
    '/nhacungcap5.webp',
    '/nhacungcap6.webp',
    '/nhacungcap7.webp',
    '/nhacungcap8.webp',
    '/nhacungcap9.webp',
    '/nhacungcap10.webp',
    '/nhacungcap11.webp',
    '/nhacungcap12.webp',
    '/nhacungcap13.webp',
    '/nhacungcap14.webp',
    '/nhacungcap15.webp',
    '/nhacungcap16.webp'
  ]

  return (
    <div className='ctnr'>
      <div className='footer-top'>
        <div className='logo-footer'>
          <Link>
            <img src='/812ee25a09813ea702fb26170cc3c0d3.png' alt='' />
          </Link>
        </div>
        <div className='desc-footer-top'>
          <span>
            3TWIN là một trong những nhà cái hàng đầu trong lĩnh vực cá cược
            trực tuyến tại Châu Âu. Với sứ mệnh cung cấp trải nghiệm độc đáo và
            an toàn cho người chơi, 3TWIN không chỉ cung cấp các trò chơi cá
            cược phong phú mà còn mang đến dịch vụ khách hàng chuyên nghiệp và
            tiện lợi. Với sự đa dạng về các trò chơi casino, thể thao và
            e-sports, cùng với các chương trình khuyến mãi hấp dẫn, 3TWIN là lựa
            chọn lý tưởng cho những ai đam mê cá cược trực tuyến. [...]
          </span>
          <span className='show-footer-top'>Xem thêm</span>
        </div>
      </div>

      <div className='footer-center-brand'>
        <div className='list-brand-footer'>
          <Slider {...settings}>
            {brandImages.map((img, index) => (
              <div className='item-brand' key={index}>
                <a href='#'>
                  <img src={img} alt={`Brand ${index + 1}`} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='list-category-footers'>
        <div className='box-category-footers'>
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

      <div className='coppy-right-footer'>
        <span>Copyright © F8BET.COM Reserved </span>
      </div>
    </div>
  )
}

export default FooterPage
