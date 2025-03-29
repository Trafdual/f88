import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'

function NoHuLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const thethao = [
    { name: 'Pragmatic Play', img: '/pramaticplay.webp' },
    { name: 'CQ9', img: '/cq9gaming.webp' },
    { name: 'MicroGaming', img: '/microgaming.webp' },
    { name: 'TCGaming', img: '/tcgaming.webp' },
    { name: 'AFBGaming', img: '/afbgaming.webp' },
    { name: 'JiLiGaming', img: '/jiligaming.webp' },
    { name: 'Rich88', img: '/rich88.webp' },
    { name: 'Bầu Cua', img: '/baucua.webp' }
  ]

  return (
    <div className='div_thethao_page'>
      {isMobile ? (
        <div></div>
      ) : (
        <div
          className='banner_game'
          style={{
            backgroundImage: "url('/bannernohu.jfif')"
          }}
        ></div>
      )}

      <NewsNotification />
      {isMobile && <MenuMobile />}

      <div className='div_name_game_tong'>
        <NameGame
          name={'Nổ Hũ'}
          title={
            'Hơn 8.000 trò chơi đa dạng và hoàn trả cực khủng lên tới 2.00%'
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

export default NoHuLayout
