import React from 'react'
import { Link } from 'react-router-dom'
const BoxSigninSucecs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/WebsiteProfile'>
            <img src='/icon1.png' alt='' />
            <span>Nạp tiền</span>
          </Link>
        </li>

        <li>
          <Link to='/WebsiteProfile'>
            <img src='/b04f2d4b96137eb35597bca4b4ab3a5a.png' alt='' />
            <span>Rút tiền</span>
          </Link>
        </li>

        <li>
          <Link to='/WebsiteProfile'>
            <img src='/3a63139307f5f1c83e9dba580f017d4c.png' alt='' />
            <span>VIP</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BoxSigninSucecs
