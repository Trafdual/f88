import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../public/frontend/css/menumobile.css'

function MenuMobile () {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  const handleClick = link => {
    setActiveLink(link)
  }

  const settingsGame = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 5 }
      }
    ]
  }

  const gamesMobile = [
    {
      title: 'Thể thao',
      image: '/sport.97ee2afae78be1b8.2f4e86b39eb03af408fd.png',
      link: '/thethaomobile'
    },
    { title: 'Casino', image: '/live.e35483fa9ff9f0e1.png', link: '/casino' },
    { title: 'Nổ Hũ', image: '/slot.fb8f538dec8e96f3.png', link: '/nohu' },
    { title: 'Bắn cá', image: '/fish.956cb4baca336fdb.png', link: '/banca' },
    { title: 'Đá gà', image: '/daga.png', link: '/daga' }
  ]

  return (
    <div className='list-tab-category-mobile'>
      <Slider {...settingsGame}>
        {gamesMobile.map((game, index) => (
          <div className='box-item-category-track' key={index}>
            <div
              className={`item-category-game-mobile ${
                activeLink === game.link ? 'menu_active' : ''
              }`}
            >
              <Link to={game.link} onClick={() => handleClick(game.link)}>
                <div
                  className={`image-icon-category-mobile ${
                    activeLink === game.link ? 'icon-menu-active' : ''
                  }`}
                  style={{ backgroundImage: `url(${game.image})` }}
                ></div>
                <p>{game.title}</p>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MenuMobile
