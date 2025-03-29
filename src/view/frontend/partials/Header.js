/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Header = ({ onLoginClick, onSignupClick }) => {
  const showSuccessBox = sessionStorage.getItem('dangnhap')
  const location = useLocation()
  const locationpath = location.pathname
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(new Date())
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  const handleLoginClick = event => {
    event.preventDefault()
    if (showSuccessBox) {
      navigate('/hoahong') // Chuyển trang nếu showSuccessBox tồn tại
    } else {
      onLoginClick()
    }
  }

  const handleSignupClick = event => {
    event.preventDefault()
    onSignupClick()
  }
  const toggleActive = () => {
    setIsActive(prev => !prev)
  }
  const getSliderSettings = images => ({
    dots: false,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: Math.min(images.length, 6),
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(images.length, 3)
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(images.length, 2)
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(images.length, 1)
        }
      }
    ]
  })

  const images = [
    '/aesexy.webp',
    '/agassia.webp',
    '/evolution.webp',
    '/sagaming.webp',
    '/wmcasino.webp',
    '/dreamgaming.webp'
  ]

  const thethao = [
    '/saba.webp',
    '/bti.webp',
    '/panda.webp',
    '/afb.webp',
    '/cockfight.webp'
  ]

  const nohu = [
    '/pramaticplay.webp',
    '/cq9gaming.webp',
    '/microgaming.webp',
    '/tcgaming.webp',
    '/afbgaming.webp ',
    '/jiligaming.webp',
    '/rich88.webp',
    '/baucua.webp'
  ]
  const banca = ['/cq9gaming.webp']
  return (
    <div className='box-header-all'>
      <header>
        <div className='ctnr'>
          <div className='box-header-desk'>
            <div className='header-mobile-icon'>
              <div className='icon-nav' onClick={() => setIsActive(true)}>
                <img src='/bar.91baf94be5d93bac.png' alt='' />
              </div>
              <div className={`list-bar-menus ${isActive ? 'active' : ''}`}>
                <div
                  className='close-header-mobile'
                  onClick={() => setIsActive(false)}
                >
                  <img src='/menu_close.ab398811487c038b.png' alt='' />
                </div>
              </div>
            </div>

            <div className='logo-desk'>
              <Link to='/'>
                <img src='/logo.png' alt='' />
              </Link>
            </div>

            <div className='box-header-right-top'>
              <div className='settime-auto-header'>
                <p>{time.toLocaleString()}</p>
              </div>
              <div className='box-nav-desk-header-top'>
                <ul class='box-no-active-sigin'>
                  <li>
                    <Link to=''>
                      <img src='/icon1.png' alt='' />
                      <span>Khuyến Mãi</span>
                    </Link>
                  </li>

                  <li>
                    <Link to=''>
                      <img src='/47b3d6bb44afdd817b6fc2a0a66cd1aa.png' alt='' />
                      <span>CSKH 24/7</span>
                    </Link>
                  </li>

                  <li>
                    <Link to=''>
                      <img src='/088740c399764deeda2560381b2d8cd5.png' alt='' />
                      <span>Đại Lý</span>
                    </Link>
                  </li>
                </ul>

                {showSuccessBox && (
                  <div className='Box-signin-sucecs'>
                    <ul>
                      <li>
                        <Link to='/WebsiteProfile/Deposit'>
                          <img src='/icon1.png' alt='' />
                          <span>Nạp tiền</span>
                        </Link>
                      </li>

                      <li>
                        <Link to='/WebsiteProfile/withdrawApplication'>
                          <img
                            src='/b04f2d4b96137eb35597bca4b4ab3a5a.png'
                            alt=''
                          />
                          <span>Rút tiền</span>
                        </Link>
                      </li>

                      <li>
                        <Link to='/WebsiteProfile'>
                          <img
                            src='/3a63139307f5f1c83e9dba580f017d4c.png'
                            alt=''
                          />
                          <span>VIP</span>
                        </Link>
                      </li>
                    </ul>

                    <div className='singin-name'>
                      <p> Bao10122003 </p>
                      <span>0</span>
                    </div>

                    <div
                      className={`avarat-name-active ${
                        isActive ? 'active' : ''
                      }`}
                    >
                      <div className='avatar-tion-name' onClick={toggleActive}>
                        <img
                          alt=''
                          src='https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/99cdae96e2/images/ea89097590e2197a90c2f5d3974eae55.png'
                        />
                      </div>
                      <div className='action-box-profile'>
                        <ul>
                          <li className='Tkweb'>
                            <Link to='/WebsiteProfile' className='item-tk'>
                              Thông tin tài khoản
                            </Link>
                          </li>
                          <li>
                            <a
                              onClick={e => {
                                e.preventDefault()
                                sessionStorage.removeItem('dangnhap')
                                window.location.href = '/'
                              }}
                              data-discover='true'
                            >
                              Đăng xuất
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {!showSuccessBox && (
                  <div className='list-btn-header-top'>
                    <Link to='' className='login' onClick={handleLoginClick}>
                      Đăng nhập
                    </Link>
                    <Link
                      className='signup'
                      to='/register'
                      onClick={handleSignupClick}
                    >
                      Đăng ký
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='header-bottom'>
        <div className='ctnr'>
          <div className='box-header-bottom-bar'>
            <div className='list-tab-header-menu'>
              <ul>
                <li
                  className={
                    locationpath === '/' ? 'tab-header-menu-active' : ''
                  }
                >
                  <Link to='/'>Trang Chủ</Link>
                </li>

                <li
                  className={
                    locationpath === '/thethao' ? 'tab-header-menu-active' : ''
                  }
                >
                  <Link to='/thethao'>Thể thao</Link>

                  <div className='menu-c2-desk'>
                    <div className='ctnr'>
                      <Slider {...getSliderSettings(images)}>
                        {thethao.map((src, index) => (
                          <div className='item-slick-menu-c2' key={index}>
                            <a href='#'>
                              <img src={src} alt={`slide-${index}`} />
                            </a>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </li>

                <li
                  className={
                    locationpath === '/casino' ? 'tab-header-menu-active' : ''
                  }
                >
                  <Link to='/casino'>Casino</Link>

                  <div className='menu-c2-desk'>
                    <div className='ctnr'>
                      <Slider {...getSliderSettings(thethao)}>
                        {images.map((src, index) => (
                          <div className='item-slick-menu-c2' key={index}>
                            <a href='#'>
                              <img src={src} alt={`slide-${index}`} />
                            </a>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </li>

                <li
                  className={
                    locationpath === '/nohu' ? 'tab-header-menu-active' : ''
                  }
                >
                  <Link to='/nohu'>Nổ hũ</Link>

                  <div className='menu-c2-desk'>
                    <div className='ctnr'>
                      <Slider {...getSliderSettings(nohu)}>
                        {nohu.map((src, index) => (
                          <div className='item-slick-menu-c2' key={index}>
                            <a href='#'>
                              <img src={src} alt={`slide-${index}`} />
                            </a>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </li>

                <li
                  className={
                    locationpath === '/banca' ? 'tab-header-menu-active' : ''
                  }
                >
                  <Link to='/banca'>Bắn cá</Link>
                  <div className='menu-c2-desk'>
                    <div className='ctnr'>
                      <Slider {...getSliderSettings(banca)}>
                        {banca.map((src, index) => (
                          <div className='item-slick-menu-c2' key={index}>
                            <a href='#'>
                              <img src={src} alt={`slide-${index}`} />
                            </a>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </li>

                <li
                  className={
                    locationpath === '/hoahong' ? 'tab-header-menu-active' : ''
                  }
                >
                  <a
                    onClick={e => handleLoginClick(e)}
                    style={{ cursor: 'pointer' }}
                  >
                    Hoa hồng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
