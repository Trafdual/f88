/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MemberCenter = () => {
  return (
    <>
      <div className='hoinghi'>
        <div className='hoinghi-container'>
          <p> Trung Tâm Hội Viên </p>
          <Link>
            {' '}
            Số dư tài khoản <span>0</span> {' '}
            <FontAwesomeIcon icon={faSync} />
          </Link>
        </div>

        <div className='banence-body'>
          <div className='ctnr'>
            <div className='list-banence-member'>
              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/Deposit'>
                  <div
                    className='icon-banecer'
                    style={{
                      backgroundImage: 'url("/deposit.82a67952a69a57c9.png")'
                    }}
                  ></div>
                  <p>Nạp Tiền</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/withdrawApplication'>
                  <div
                    className='icon-banecer'
                    style={{
                      backgroundImage: 'url("/withdraw.5b6bb9a91338cfc8.png")'
                    }}
                  ></div>
                  <p>Rút Tiền</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/wellet'>
                  <div
                    className='icon-banecer'
                    style={{
                      backgroundImage:
                        'url("/any-time-discount.c0680e5396ff9140.png")'
                    }}
                  ></div>
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
                  <div
                    className='icon-banecer'
                    style={{
                      backgroundImage: 'url("/bet-record.30a422553e182818.png")'
                    }}
                  ></div>
                  <p>Lịch sử cược</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/changeBankAccount'>
                  <div
                    className='icon-banecer '
                    style={{
                      backgroundImage: 'url("/withdraw.5b6bb9a91338cfc8.png")'
                    }}
                  ></div>
                  <p>Cài đặt rút tiền</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <Link to='/LayoutProfileMobile/historyRut'>
                  <div
                    className='icon-banecer'
                    style={{
                      backgroundImage: 'url("/vip.ec8c7334af241e8f.png")'
                    }}
                  ></div>
                  <p>Lịch sử nạp rút</p>
                </Link>
              </div>

              <div className='item-member-bannence'>
                <a
                  onClick={e => {
                    e.preventDefault()
                    window.sessionStorage.removeItem('dangnhap')
                    window.location.href = '/'
                  }}
                >
                  <div
                    className='icon-banecer'
                    style={{
                      backgroundImage:
                        'url("/announcement.db4b198579b876dc.png")'
                    }}
                  ></div>
                  <p>Đăng xuất</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCenter
