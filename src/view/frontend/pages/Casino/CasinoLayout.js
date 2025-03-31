import { useState, useEffect } from 'react'
import NewsNotification from '../../components/NewsNotification'
import '../../../public/frontend/css/TheThao.css'
import NameGame from '../../components/NameGame'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ListGameMobile from '../../components/ListGameMobile'
import MenuMobile from '../../components/MenuMobile'
import Game from '../../components/Game'
import SelectGame from '../../components/SelectGame'
import GamePartListCasinoGreat from '../../components/ListGameCasinoAndGreat'
import BoxSigninSucecs from '../../components/BoxSigninSucecs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

function CasinoLayout () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [key, setkey] = useState('wm')
  const dangnhapstatus = sessionStorage.getItem('dangnhap')

  const [item, setitem] = useState({
    src: '/logo/wmgame.png',
    namegame: 'WM',
    trangthai: 'trực tuyến',
    profit: '0.80',
    content:
      ' Sảnh CASINO trực tuyến được nhiều khách hàng lựa chọn tham gia trên thị trường cá cược, đa dạng các sản phẩm như: Baccarat, Xóc đĩa, Roulette, Tài xỉu, Fantan ... cùng các nữ thần chia bài xinh đẹp, nóng bỏng, thân thiện tương tác trực tuyến với khách hàng, điều này thật thú vị và hấp dẫn. '
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const images = [
    { name: 'AE Sexy', img: '/casino/se.png' },
    { name: 'AG Asia', img: '/casino/ag.png' },
    { name: 'Evolution', img: '/casino/evo.png' },
    { name: 'SA Gaming', img: '/casino/sa.png' },
    { name: 'WM Casino', img: '/casino/wm.png' },
    { name: 'Dream Gaming', img: '/casino/dg.png' }
  ]

  const selectgame = [
    {
      src: '/logo/wmlogo.png',
      key: 'wm',
      item: {
        src: '/logo/wmgame.png',
        namegame: 'WM',
        trangthai: 'trực tuyến',
        profit: '0.80',
        content:
          ' Sảnh CASINO trực tuyến được nhiều khách hàng lựa chọn tham gia trên thị trường cá cược, đa dạng các sản phẩm như: Baccarat, Xóc đĩa, Roulette, Tài xỉu, Fantan ... cùng các nữ thần chia bài xinh đẹp, nóng bỏng, thân thiện tương tác trực tuyến với khách hàng, điều này thật thú vị và hấp dẫn. '
      }
    },
    {
      src: '/logo/dglogo.png',
      key: 'dg',
      item: {
        src: '/logo/dggame.png',
        namegame: 'DG',
        trangthai: 'trực tuyến',
        profit: '0.80',
        content:
          ' Sảnh CASINO trực tuyến cung cấp đa dạng trò chơi trực tuyến với các nữ thần xinh đẹp đến từ nhiều nước trên toàn thế giới, tương tác vui vẻ mang lại cảm giác trải nghiệm vô cùng thú vị. Điểm cược tối thiểu chỉ từ 1 điểm phù hợp với tất cả hội viên khi muốn tham gia.  '
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
            backgroundImage: "url('/bannergame.jfif')"
          }}
        ></div>
      )}
      <NewsNotification />
      {isMobile && dangnhapstatus && (
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
        {!isMobile && (
          <NameGame
            name={'Casino'}
            title={
              'Quy tụ nhiều nữ thần chia bài xinh đẹp, Hoàn trả cực cao nhất thị trường.'
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

        {isMobile ? <ListGameMobile list={images} /> : <Game item={item} />}
        {isMobile && <GamePartListCasinoGreat />}
      </div>
    </div>
  )
}

export default CasinoLayout
