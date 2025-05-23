import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Silbar from '../pages/Profile/Silbar'
import Banner from '../components/Banner'
import NewsNotification from '../components/NewsNotification'
import Header from '../partials/Header'
import Login from '../pages/Login'
import FooterPage from '../partials/FooterPage'

const WebsiteProfile = () => {
  const [popup, setPopup] = useState(null)
  return (
    <div className='box-profile'>
      <Header></Header>
      <Banner />
      <NewsNotification />
      <div className='box-member-profile'>
        <div className='ctnr'>
          <div className='row'>
            <div className=''>
              <Silbar />
            </div>
            <div className='silbar-right-step'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {popup === 'login' && (
        <Login
          onClose={() => setPopup(null)}
          onSwitch={() => setPopup('signup')}
        />
      )}

      <div>
        <FooterPage login={() => setPopup('login')}/>
      </div>
    </div>
  )
}

export default WebsiteProfile
