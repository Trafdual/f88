import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../public/frontend/css/listgame.css'

function ListGame ({ list }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button className='carousel_arrow right_arrow'>→</button>,
    prevArrow: <button className='carousel_arrow left_arrow'>←</button>,
    dotsClass: 'carousel_dots',
    customPaging: i => <span className='dot'></span>
  }

  return (
    <div className='div_game_tong'>
      <div className='div_game'>
        <div className='game_header'>
          <span className='game_section_title'>Giới Thiệu Trò Chơi</span>
          <span className='game_section_more'>
            {list.length > 1 ? 'Nhiều Trò Chơi Hơn' : ''}
          </span>
        </div>

        {list.length > 4 ? (
          <Slider {...sliderSettings}>
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
                <div className='game_info'>
                  <span className='game_title'>{item.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className='div_game_card'>
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
                <div className='game_info'>
                  <span className='game_title'>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ListGame
