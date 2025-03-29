/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FooterFixed from '../components/FooterFixed'

const Footer = ({ login }) => {
  return <FooterFixed login={login}></FooterFixed>
}

export default Footer
