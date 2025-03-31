import React, { useState, useEffect } from 'react'
import { Table, Typography, DatePicker, Select } from 'antd'

const { RangePicker } = DatePicker
const { Title } = Typography

const History = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const data = []

  const columns = [
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
      width: 150
    },
    {
      title: 'Số lần cược',
      dataIndex: 'betCount',
      key: 'betCount',
      width: 150
    },
    {
      title: 'Số tiền đặt cược',
      dataIndex: 'betAmount',
      key: 'betAmount',
      width: 200
    },
    {
      title: 'Tiền cược hợp lệ',
      dataIndex: 'validBet',
      key: 'validBet',
      width: 200
    },
    {
      title: 'Kết quả',
      dataIndex: 'result',
      key: 'result',
      width: 200
    }
  ]
  const summaryData = {
    winAmount: 0,
    loseAmount: 0,
    estimatedProfit: 0
  }

  const [selectedForm, setSelectedForm] = useState('ALL')
  const [dates, setDates] = useState([null, null])
  const today = new Date().toISOString().split('T')[0]

  const [date, setDate] = useState(today)
  const [enddate, setendDate] = useState(today)

  const handleFormChange = value => {
    setSelectedForm(value)
  }

  const handleDateChange = dates => {
    setDates(dates)
  }

  return (
    <div className='box-history'>
      <div className='history-header'>
        <div className='title-history'>
          <Title level={2}>Lịch sử đặt cược</Title>
        </div>
      </div>
      <div className='body-historys' style={{ padding: '20px' }}>
        <p className='price-lose'>
          Tiền thắng: <span>{summaryData.winAmount}</span>
        </p>
        <p className='price-lose'>
          Tiền thua: <span>{summaryData.loseAmount}</span>
        </p>
        <p className='price-lose'>
          Tiền lãi ước tính: <span>{summaryData.estimatedProfit}</span>
        </p>
        <div className='flex-hinhthuc'>
          <div style={{ marginBottom: '20px' }} className='selec-profile'>
            <label>Hình thức: </label>
            <Select
              defaultValue={selectedForm}
              style={{ width: 120 }}
              onChange={handleFormChange}
            >
              <Select.Option value='ALL'>ALL</Select.Option>
              <Select.Option value='FORM_1'>FORM 1</Select.Option>
              <Select.Option value='FORM_2'>FORM 2</Select.Option>
              {/* Thêm các lựa chọn khác nếu cần */}
            </Select>
          </div>

          <div style={{ marginBottom: '20px' }} className='selec-bottom'>
            {!isMobile ? (
              <RangePicker
                value={dates}
                onChange={handleDateChange}
                format='MM/DD/YYYY' // Định dạng hiển thị của ngày tháng
                style={{ marginLeft: '8px' }}
              />
            ) : (
              <div className='divinputdate'>
                <input
                  type='date'
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  pattern='d{2}/d{2}/d{4}'
                  title='Định dạng: dd/mm/yyyy'
                />
                <svg
                  viewBox='0 0 1024 1024'
                  focusable='false'
                  data-icon='swap-right'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z'></path>
                </svg>
                <input
                  type='date'
                  value={enddate}
                  onChange={e => setendDate(e.target.value)}
                  pattern='d{2}/d{2}/d{4}'
                  title='Định dạng: dd/mm/yyyy'
                />
                <svg
                  viewBox='64 64 896 896'
                  focusable='false'
                  data-icon='down'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='table-history'>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          rowKey='time'
          scroll={{ x: 'max-content' }}
          locale={{ emptyText: ' Không có bất kì thông tin nào' }}
        />
      </div>
    </div>
  )
}

export default History
