import NewsNotification from '../../components/NewsNotification'
import { useState } from 'react'
import '../../../public/frontend/css/promotionlayout.css'
function PromotionLayout () {
  const data = [
    {
      title: 'HOT',
      list: [
        { img: '/promotion/p1.jpg' },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        },
        {
          img: '/promotion/p1.jpg'
        }
      ]
    },
    {
      title: 'TẤT CẢ',
      list: [{ img: '/promotion/p1.jpg' }]
    },

    {
      title: 'TÂN THỦ',
      list: [{ img: '/promotion/p1.jpg' }]
    },
    {
      title: 'NỔ HŨ - BẮN CÁ',
      list: [{ img: '/promotion/p1.jpg' }]
    },
    {
      title: 'CASINO',
      list: [{ img: '/promotion/p1.jpg' }]
    },
    {
      title: 'THỂ THAO',
      list: [{ img: '/promotion/p1.jpg' }]
    },
    {
      title: 'GAME BÀI',
      list: [{ img: '/promotion/p1.jpg' }]
    },
    {
      title: 'QUÀ TẶNG',
      list: [{ img: '/promotion/p1.jpg' }]
    }
  ]

  const [list, setlist] = useState(data[0].list)
  const [activeTab, setActiveTab] = useState('HOT')
  console.log(list)
  return (
    <div className='div_promotion_container'>
      <div
        className='banner_game'
        style={{
          backgroundImage: "url('/promotion/pbanner.jpg')",
          height: '200px',
          backgroundPosition: 'center bottom'
        }}
      ></div>
      <NewsNotification />
      <div className='div_promotion_tong'>
        <div className='div_promotion_pho'>
          <ul className='ul_promotion_container'>
            {data.map((btn, index) => (
              <li
                key={index}
                className={`${activeTab === btn.title ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(btn.title)
                  setlist(btn.list)
                }}
              >
                {btn.title === 'HOT' ? `🔥 ${btn.title}` : btn.title}
              </li>
            ))}
          </ul>
          <section className='section_promotion_container'>
            {list.map((image, index) => (
              <div className='div_promotion' key={index}>
                <img src={image.img} alt={`imagepromot${index}`} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default PromotionLayout
