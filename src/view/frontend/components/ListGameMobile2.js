/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../public/frontend/css/listgame.css'

function ListGameMobile2 ({ list }) {
  return (
    <div className='div_game_tong'>
      <div className='div_game'>
        <div className='game_header'>
          <span className='game_section_title'>Giới Thiệu Trò Chơi</span>
          <span className='game_section_more'>Nhiều Trò Chơi Hơn</span>
        </div>
        <div className='div_game_card'>
          {list.map((item, index) => (
            <a href='#'>
              <div className='game_card2' key={index}>
                <div className='game_card_wrapper2'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='game_thumbnail2'
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListGameMobile2
