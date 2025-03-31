import React, { useState } from 'react'
import '../../public/frontend/css/promotionmodal.css'

const PromotionModal = ({ isOpen, onClose }) => {
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

  return (
    <>
      {isOpen && <div className='promotion-overlay' onClick={onClose}></div>}
      {isOpen && (
        <div className='promotion-modal-header'>
          <h2>Khu vực ưu đãi</h2>
          <button onClick={onClose} className='promotion-close-btn'>
            ✖
          </button>
        </div>
      )}

      <div className={`promotion-modal ${isOpen ? 'show' : 'hide'}`}>
        <div className='promotion-modal-content'>
          <div className='promo-buttons'>
            {data.map((btn, index) => (
              <button
                key={index}
                className={`${activeTab === btn.title ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(btn.title)
                  setlist(btn.list)
                }}
              >
                {btn.title === 'HOT' ? `🔥 ${btn.title}` : btn.title}
              </button>
            ))}
          </div>
          <div className='promo-items'>
            {list.map((image, index) => (
              <img key={index} src={image.img} alt={`imagepromot${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default PromotionModal
