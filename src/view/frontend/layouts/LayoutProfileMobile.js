import React, { useState } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
const LayoutProfileMobile = () => {
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
      <Footer login={() => setPopup('login')}></Footer>
    </div>
  )
}

export default LayoutProfileMobile
