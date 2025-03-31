import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile2 from '../../components/ListGameMobile2'
import MenuMobile from '../../components/MenuMobile'
import Banner from '../../components/Banner'
import GamePartListCasinoGreat from '../../components/ListGameCasinoAndGreat'
import BoxSigninSucecs from '../../components/BoxSigninSucecs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

function TheThaoMobile () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const dangnhapstatus = sessionStorage.getItem('dangnhap')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const thethao = [
    { name: "SABA Sports", img: "/afb2.jpg" },
    { name: "SABA Sports", img: "/bti2.jpg" },
    { name: "SABA Sports", img: "/sabamobile.png" },
  ];

  return (
    <div className='div_thethao_page'>
      {isMobile ? <div></div> : <div className='banner_game'></div>}
      <Banner />
      <NewsNotification />
      {dangnhapstatus && (
        <div className='box-login-sigin-respert'>
          <div className='member-name-login'>
            <div className='singin-name'>
              <p> ALO123123 </p>
              <span>0 </span>

              <FontAwesomeIcon icon={faSync} />
            </div>
          </div>
          <div className='box-member-right-login'>
            <BoxSigninSucecs />
          </div>
        </div>
      )}

      {isMobile && <MenuMobile />}
      <div className='div_name_game_tong'>
        {isMobile ? (
          <ListGameMobile2 list={thethao} />
        ) : (
          <ListGame list={thethao} />
        )}
      </div>
      {isMobile && <GamePartListCasinoGreat />}
    </div>
  )
}

export default TheThaoMobile
