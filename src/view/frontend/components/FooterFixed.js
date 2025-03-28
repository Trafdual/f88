import React from 'react'
import { Link } from "react-router-dom";

const FooterFixed = () => {
  return (
    <div>
        <div className="list-menu-entire-fixed">
        <ul>
          <li>
            <Link>
              <div className="icon-menu-fixed-footer"></div>
              Trang chủ</Link>
          </li>
          <li>
            
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            Tải App</Link>
          </li>
          <li>
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            Khuyến mãi</Link>
          </li>
          <li>
            <Link>
            <div className="icon-menu-fixed-footer"></div>
            
            CSKH 24/7</Link>
          </li>
          <li>
            <Link to="/LayoutProfileMobile">
            <div className="icon-menu-fixed-footer"></div>
            
            Tài khoản</Link>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default FooterFixed