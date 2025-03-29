import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FooterFixed = () => {
  const location = useLocation()
  const activeLink = location.pathname
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
            <Link to='/LayoutProfileMobile'>
              <div
                className={
                  activeLink === '/LayoutProfileMobile'
                    ? 'icon-menu-fixed-footer icon-menu-fixed-footer-active'
                    : 'icon-menu-fixed-footer'
                }
              ></div>
              Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterFixed
