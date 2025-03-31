import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const BoxSigninSucecs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <ul>
        <li>
          <Link to={isMobile?'/LayoutProfileMobile/Deposit':'/WebsiteProfile/Deposit'}>
          <img  src='/deposit.bebc07ae6c5ab352.png' alt='' />
            <span>Nạp tiền</span>
          </Link>
        </li>

        <li>
          <Link to={isMobile?'/LayoutProfileMobile/withdrawApplication':'/WebsiteProfile/withdrawApplication'}>
          <img style={{ width: '40px' }} src='/b04f2d4b96137eb35597bca4b4ab3a5a.png' alt='' />
            <span>Rút tiền</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <img src='/3a63139307f5f1c83e9dba580f017d4c.png' alt='' />
            <span>VIP</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BoxSigninSucecs
