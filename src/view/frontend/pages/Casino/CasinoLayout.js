import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'

function CasinoLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const images = [
    { name: 'AE Sexy', img: '/aesexy.webp' },
    { name: 'AG Asia', img: '/agassia.webp' },
    { name: 'Evolution', img: '/evolution.webp' },
    { name: 'SA Gaming', img: '/sagaming.webp' },
    { name: 'WM Casino', img: '/wmcasino.webp' },
    { name: 'Dream Gaming', img: '/dreamgaming.webp' }
  ]

  return (
    <div className='div_thethao_page'>
      {isMobile ? <div></div> : <div className='banner_game'></div>}
      <NewsNotification />
      {isMobile && <MenuMobile />}

      <div className='div_name_game_tong'>
        <NameGame
          name={'Casino'}
          title={
            'Quy tụ nhiều nữ thần chia bài xinh đẹp, Hoàn trả cực cao nhất thị trường.'
          }
        />
        {isMobile ? (
          <ListGameMobile list={images} />
        ) : (
          <ListGame list={images} />
        )}
      </div>
    </div>
  )
}

export default CasinoLayout
