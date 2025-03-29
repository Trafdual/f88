/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const FooterFixed = ({ login }) => {
  const dangnhapstatus = sessionStorage.getItem('dangnhap')
  const location = useLocation()
  const activeLink = location.pathname
  const navigate = useNavigate()

  const handleLoginClick = event => {
    event.preventDefault()
    if (dangnhapstatus) {
      navigate('/LayoutProfileMobile')
    } else {
      login()
    }
  }

  return (
    <div>
      <div className='list-menu-entire-fixed'>
        <ul>
          <li>
            <Link to='/'>
              <div
                className={
                  activeLink === '/'
                    ? 'icon-menu-fixed-footer icon-menu-fixed-footer-active'
                    : 'icon-menu-fixed-footer'
                }
              ></div>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link>
              <div className='icon-menu-fixed-footer'></div>
              Tải App
            </Link>
          </li>
          <li>
            <Link>
              <div className='icon-menu-fixed-footer'></div>
              Khuyến mãi
            </Link>
          </li>
          <li>
            <Link>
              <div className='icon-menu-fixed-footer'></div>
              CSKH 24/7
            </Link>
          </li>
          <li>
            <a onClick={e => handleLoginClick(e)}>
              <div
                className={
                  activeLink === '/LayoutProfileMobile'
                    ? 'icon-menu-fixed-footer icon-menu-fixed-footer-active'
                    : 'icon-menu-fixed-footer'
                }
              ></div>
              Tài khoản
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterFixed
