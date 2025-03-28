import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'

function BanCaLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const thethao = [{ name: 'CQ9', img: '/cq9gaming.webp' }]

  return (
    <div className='div_thethao_page'>
      {isMobile ? <div></div> : <div className='banner_game'></div>}
      <NewsNotification />
      {isMobile && <MenuMobile />}
      <div className='div_name_game_tong'>
        <NameGame
          name={'Bắn Cá'}
          title={'Giao diện đẹp mắt, Sống động từ nhiều nhà cung cấp hàng đầu.'}
        />
        {isMobile ? (
          <ListGameMobile list={thethao} />
        ) : (
          <ListGame list={thethao} />
        )}
      </div>
    </div>
  )
}

export default BanCaLayout
