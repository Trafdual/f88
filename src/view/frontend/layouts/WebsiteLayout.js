import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'

// Partials
import Header from '../partials/Header'
import Footer from '../partials/Footer'

// CSS
import '../../public/frontend/css/utilities.css'
import '../../public/frontend/css/Header.css'
import '../../public/frontend/css/Footer.css'
import '../../public/frontend/css/Home.css'
import '../../public/frontend/css/Profile.css'
import '../../public/frontend/css/Resgeter.css'
import FooterPage from '../partials/FooterPage'

const WebsiteLayout = () => {
  const [popup, setPopup] = useState(null)

  return (
    <div>
      <Header
        onLoginClick={() => setPopup('login')}
        onSignupClick={() => setPopup('signup')}
      />

      {popup === 'login' && (
        <Login
          onClose={() => setPopup(null)}
          onSwitch={() => setPopup('signup')}
        />
      )}

      {popup === 'signup' && (
        <Register
          onClose={() => setPopup(null)}
          onSwitch={() => setPopup('login')}
        />
      )}

      <Outlet />
      <div>
        <div login={() => setPopup('login')} />
        <FooterPage />
      </div>
    </div>
  )
}

export default WebsiteLayout
