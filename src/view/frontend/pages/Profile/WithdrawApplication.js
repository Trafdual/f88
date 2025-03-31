import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WithdrawApplication = () => {
  const [activeTab, setActiveTab] = useState('bank')
  const [amount, setAmount] = useState('')
  const [password, setPassword] = useState('')

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='ctnr'>
      <div className='WithdrawApplication'>
        <div className='list-withdraw-header'>
          <div
            className={`item-withdraw-header ${
              activeTab === 'bank' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('bank')}
          >
            <div className='icon-banking'></div>
            <span>Ngân hàng</span>
          </div>
          <div
            className={`item-withdraw-header ${
              activeTab === 'usdt' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('usdt')}
          >
            <div className='icon-banking'></div>
            <span>USDT</span>
          </div>
        </div>

        <div className='withdraw-content'>
          <div className='balance-info'>
            <p>
              Số dư ước tính:{' '}
              <strong> {activeTab === 'bank' ? '0 VNĐ' : '0.00 USDT'}</strong>
            </p>
          </div>

          <form>
            {activeTab === 'bank' && (
              <>
                <div className='item-label-bank '>
                  <p className='d-flex ai-center'>
                    {' '}
                    <img src='/nganhang.png' alt='' /> Ngân hàng
                  </p>
                </div>
                <Link
                  to={
                    isMobile
                      ? '/LayoutProfileMobile/changeBankAccount'
                      : '/WebsiteProfile/changeBankAccount'
                  }
                  className='thietlap'
                >
                  Thiết lập ngân hàng
                </Link>
                <div className='item-label-bank box-banktabs'>
                  <div className='item-label-bank'>
                    <div className='d-flex js-between ruttien'>
                      <p>Số tiền rút ra</p>
                      <span>Phí: 1$</span>
                    </div>
                    <input
                      type='number'
                      placeholder='Nhập số tiền'
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                    />
                  </div>

                  <div className='item-label-bank'>
                    <p>Mật khẩu giao dịch</p>
                    <input
                      type='password'
                      placeholder='Nhập mật khẩu'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'usdt' && (
              <>
                <div className='divinputmangluoi_depoin'>
                  <input type='radio' checked />
                  <img alt='' width='30' height='30' src='/usdt.svg' />
                  <span>USDT</span>
                </div>

                <div className='item-label-bank'>
                  <p>Địa chỉ ví</p>
                  <input placeholder='Nhập địa chỉ ví' />
                </div>

                <div className='item-label-bank'>
                  <p>Số tiền rút ra</p>
                  <div className='item-usdt'>
                    <input placeholder='Nhập địa chỉ ví' />
                    <p>USDT</p>
                  </div>
                </div>
                <div className='item-label-bank'>
                  <input placeholder='Nhập mật khẩu rút tiền' type='password' />
                </div>
              </>
            )}

            <div className='btn-bank'>
              <button type='submit'>Gửi đi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WithdrawApplication
