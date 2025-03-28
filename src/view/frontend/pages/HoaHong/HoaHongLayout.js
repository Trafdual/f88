/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import GioiThieuLayout from './GioiThieu/GioiThieuLayout'
import MangluoiLayout from './MangLuoi/MangLuoiLayout'
import LichSuLayout from './LichSu/LichSuLayout'
import '../../../public/frontend/scss/hoahong.scss'
import Banner from '../../components/Banner'
import NewsNotification from '../../components/NewsNotification'

function HoaHongLayout () {
  const [activeTab, setActiveTab] = useState('Giới thiệu')

  const tabs = ['Giới thiệu', 'Thành viên', 'Lịch sử']

  return (
    <>
      <Banner />
      <NewsNotification />
      <div className='divhoahong_container'>
        <div className='tab_list'>
          {tabs.map(tab => (
            <div
              key={tab}
              className={`tab_item ${
                activeTab === tab ? 'tab_item_active' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <div className='tab_itemtext'>{tab}</div>
            </div>
          ))}
        </div>
        <div>
          {activeTab === 'Giới thiệu' && <GioiThieuLayout />}
          {activeTab === 'Thành viên' && <MangluoiLayout />}
          {activeTab === 'Lịch sử' && <LichSuLayout />}
        </div>
      </div>
    </>
  )
}

export default HoaHongLayout
