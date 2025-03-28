import React from 'react'
import { Link } from 'react-router-dom'

const MemberCenter = () => {
  return (
    <>
      <div className='hoinghi'>
        <div className='hoinghi-container'>
          <p> Trung Tâm Hội Viên </p>
          <Link>
            Số dư tài khoản <span>0</span>
          </Link>
        </div>

        <div className='banence-body'>
          <div className='ctnr'>
            <div className='list-banence-member'>
              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/Deposit'>
                  <div className='icon-banecer'></div>
                  <p>Nạp Tiền</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/withdrawApplication'>
                  <div className='icon-banecer'></div>
                  <p>Rút Tiền</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/wellet'>
                  <div className='icon-banecer'></div>
                  <p>Ví</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/securityList'>
                  <div className='icon-banecer'></div>
                  <p>Thông tin cá nhân</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/history'>
                  <div className='icon-banecer'></div>
                  <p>Lịch sử cược</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/changeBankAccount'>
                  <div className='icon-banecer'></div>
                  <p>Cài đặt rút tiền</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/historyRut'>
                  <div className='icon-banecer'></div>
                  <p>Lịch sử nạp rút</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/'>
                  <div className='icon-banecer'></div>
                  <p>Đăng xuất</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenter
