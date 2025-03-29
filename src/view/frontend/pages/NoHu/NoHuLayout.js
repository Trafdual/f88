import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGame from '../../components/ListGame'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'
import SelectGame from '../../components/SelectGame'

function NoHuLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [key, setkey] = useState('pg')

  const [item, setitem] = useState([
    { name: 'Đường mạt chược', img: '/pggame/mahyong.png' },
    { name: 'Kho báu Aztec', img: '/pggame/aztec.png' },
    { name: 'Đường mạt chược 2', img: '/pggame/mahyong2.png' },
    { name: 'Quyết chiến tiền thương', img: '/pggame/showdown.png' },
    { name: 'Neko may mắn', img: '/pggame/lucky.png' }
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
      src: '/logo/pglogo.png',
      key: 'pg',
      item: [
        { name: 'Đường mạt chược', img: '/pggame/mahyong.png' },
        { name: 'Kho báu Aztec', img: '/pggame/aztec.png' },
        { name: 'Đường mạt chược 2', img: '/pggame/mahyong2.png' },
        { name: 'Quyết chiến tiền thương', img: '/pggame/showdown.png' },
        { name: 'Neko may mắn', img: '/pggame/lucky.png' }
      ]
    },
    {
      src: '/logo/jililogo.png',
      key: 'jili',
      item: [
        { name: 'Siêu cấp Ace', img: '/jiligame/ace.png' },
        { name: 'Đế quốc hoàng kim', img: '/jiligame/golden.png' },
        { name: 'Bảo thạch Kala', img: '/jiligame/kala.png' },
        { name: 'Quyền vương', img: '/jiligame/boxing.png' },
        { name: 'Ngọc may mắn 2', img: '/jiligame/gems.png' }
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
        <SelectGame
          listdanhsach={selectgame}
          selectedKey={key}
          setkey={setkey}
          setitem={setitem}
        />

        {isMobile ? <ListGameMobile list={item} /> : <ListGame list={item} />}
      </div>
    </div>
  )
}

export default NoHuLayout
