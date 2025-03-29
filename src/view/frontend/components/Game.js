import '../../public/frontend/css/game.css'

function Game ({ item }) {
  return (
    <div className='div_game_container'>
      <img src={item.src} alt='' className='imggame' />
      <div className='div_game_content_container'>
        <span className='name_game_content'>{item.namegame}</span>
        <span className='trangthai_game_content'>{item.trangthai}</span>
        <div className='div_discount_game_container'>
          <img src='/logo/discount.png' className='imggame' alt='' />
          <span>{item.profit}%</span>
        </div>
        <p className='ng_binding'>{item.content}</p>
        <img src='/logo/chuoigamechung.png' alt='' className='imggame' />
        <button>
          <span>Cược ngay</span>
        </button>
      </div>
    </div>
  )
}

export default Game
