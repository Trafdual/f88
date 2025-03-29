import '../../public/frontend/css/listgame.css'


function ListGameMobile ({ list }) {
  return (
    <div className='div_game_tong'>
      <div className='div_game'>
        <div className='game_header'>
          <span className='game_section_title'>Giới Thiệu Trò Chơi</span>
          <span className='game_section_more'>Nhiều Trò Chơi Hơn</span>
        </div>
        <div className="div_game_card">
          {list.map((item, index) => (
            <div className='game_card' key={index}>
              <div className='game_card_wrapper'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='game_thumbnail'
                />
                <div className='game_overlay'>
                  <button className='play_button'>Play</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListGameMobile
