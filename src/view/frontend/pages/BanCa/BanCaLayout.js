import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import MenuMobile from '../../components/MenuMobile'
import SelectGame from '../../components/SelectGame'
import GameMobile from '../../components/GameMobile'

function BanCaLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const [key, setkey] = useState('cq9')

  const [item, setitem] = useState([
    { name: 'CQ9 Bắn cá một lần', img: '/cq9game/oneshot.png' },
    { name: 'CQ9 Cá hoàng kim', img: '/cq9game/turnyou.png' },
    { name: 'CQ9 Happy bắn cá', img: '/cq9game/luckyfish.png' }
  ])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const selectgame = [
    {
      src: '/logo/cq9logo.png',
      key: 'cq9',
      item: [
        { name: 'CQ9 Bắn cá một lần', img: '/cq9game/oneshot.png' },
        { name: 'CQ9 Cá hoàng kim', img: '/cq9game/turnyou.png' },
        { name: 'CQ9 Happy bắn cá', img: '/cq9game/luckyfish.png' }
      ]
    }
  ]

  return (
    <div className='div_thethao_page'>
      {isMobile ? (
        <div></div>
      ) : (
        <div
          className='banner_game'
          style={{
            backgroundImage: "url('/bannerbanca.jfif')"
          }}
        ></div>
      )}
      <NewsNotification />
      {isMobile && <MenuMobile />}
      <div className='div_name_game_tong'>
        {!isMobile && (
          <NameGame
            name={'Bắn Cá'}
            title={
              'Giao diện đẹp mắt, Sống động từ nhiều nhà cung cấp hàng đầu.'
            }
          />
        )}
        {!isMobile && (
          <SelectGame
            listdanhsach={selectgame}
            selectedKey={key}
            setkey={setkey}
            setitem={setitem}
          />
        )}

        {isMobile ? (
          <GameMobile
            listdanhsach={selectgame}
            selectedKey={key}
            setkey={setkey}
            setitem={setitem}
            item={item}
          />
        ) : (
          <ListGame list={item} />
        )}
      </div>
    </div>
  )
}

export default BanCaLayout
