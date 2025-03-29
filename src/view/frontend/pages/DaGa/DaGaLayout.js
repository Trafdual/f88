import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile2 from '../../components/ListGameMobile2'
import MenuMobile from '../../components/MenuMobile'

function DaGaLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const thethao = [
    
    { name: 'COCKFIGHT', img: '/cockfight.webp' }
  ]

  return (
    <div className='div_thethao_page'>
      {isMobile ? <div></div> : <div className='banner_game'></div>}
      <NewsNotification />
      {isMobile && <MenuMobile />}
      <div className='div_name_game_tong'>
        <NameGame
          name={'Đá Gà'}
          title={
            'Đại chiến hùng kê với những trận đấu đỉnh cao, tỉ lệ kèo cực cao.'
          }
        />
        {isMobile ? (
          <ListGameMobile2 list={thethao} />
        ) : (
          <ListGame list={thethao} />
        )}
      </div>
    </div>
  )
}

export default DaGaLayout
