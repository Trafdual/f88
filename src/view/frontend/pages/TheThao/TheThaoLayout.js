import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'
import SelectGame from '../../components/SelectGame'
import Game from '../../components/Game'

function TheThaoLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [key, setkey] = useState('saba')
  const [item, setitem] = useState({
    src: '/logo/sabagame.png',
    namegame: 'SABA',
    trangthai: 'thể thao',
    profit:'1.20',
    content:
      ' SABA - Thể Thao là nhà cung cấp cá cược thể thao hàng đầu. SABA cung cấp hàng nghìn trận đấu hấp dẫn với tỉ lệ cược tốt nhất đến khách hàng, phát sóng trực tiếp nhiều trận đấu lớn và thống kê chi tiết trận đấu, giao diện chuyên nghiệp đáp ứng mọi yêu cầu về cá cược  thể thao.  '
  })

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

  const selectgame = [
    {
      src: '/logo/sabalogo.png',
      key: 'saba',
      item: {
        src: '/logo/sabagame.png',
        namegame: 'SABA',
        trangthai: 'thể thao',
        profit:'1.20',
        content:
          ' SABA - Thể Thao là nhà cung cấp cá cược thể thao hàng đầu. SABA cung cấp hàng nghìn trận đấu hấp dẫn với tỉ lệ cược tốt nhất đến khách hàng, phát sóng trực tiếp nhiều trận đấu lớn và thống kê chi tiết trận đấu, giao diện chuyên nghiệp đáp ứng mọi yêu cầu về cá cược  thể thao.  '
      }
    },
    {
      src: '/logo/sbologo.png',
      key: 'sbo',
      item: {
        src: '/logo/sbogame.png',
        namegame: 'SBO',
        trangthai: 'thể thao',
        profit:'1.20',
        content:
          ' SBOBET - Thể thao là cung cấp các cược thể thao lâu đời cung cấp tỉ lệ  hơn 10,000 sự kiện thể thao lớn nhỏ. Đa dạng tỉ lệ cược, chức năng thanh toán sớm giao diện thân thiện mang lại nhiều sự thích thú khi tham gia cược tại SBOBET. '
      }
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
        <SelectGame
          listdanhsach={selectgame}
          selectedKey={key}
          setkey={setkey}
          setitem={setitem}
        />
        {isMobile ? <ListGameMobile list={thethao} /> : <Game item={item} />}
      </div>
    </div>
  )
}

export default TheThaoLayout
