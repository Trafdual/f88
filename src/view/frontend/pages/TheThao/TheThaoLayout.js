import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'

function TheThaoLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const thethao = [
    { name: 'SABA Sports', img: '/saba.webp' },
    { name: 'BTI Sports', img: '/bti.webp' },
    { name: 'PANDA Sports', img: '/panda.webp' },
    { name: 'AFB Sports', img: '/afb.webp' },
    { name: 'COCKFIGHT', img: '/cockfight.webp' }
  ]

  return (
    <div className='div_thethao_page'>
      {isMobile ? (
        <div></div>
      ) : (
        <div
          className='banner_game'
          style={{
            backgroundImage: "url('/bannerthethao.jfif')"
          }}
        ></div>
      )}
      <NewsNotification />
      {isMobile && <MenuMobile />}
      <div className='div_name_game_tong'>
        <NameGame
          name={'Thể Thao'}
          title={
            'Tổng hợp các nhà cung cấp cá cược thể thao hàng đầu, tỉ lệ cược tốt nhất.'
          }
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

export default TheThaoLayout
