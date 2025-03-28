import { useState } from 'react'
import '../../../../public/frontend/scss/mangluoi.scss'
import { Table } from 'antd'
function MangluoiLayout () {
  const today = new Date().toISOString().split('T')[0]
  const [date, setDate] = useState(today)
  const data = []

  const columns = [
    {
      title: 'Tên người dùng - Cấp độ',
      dataIndex: 'name-level',
      key: 'name-level',
      width: 200
    },
    {
      title: 'Hoa hồng',
      dataIndex: 'hoahong',
      key: 'hoahong',
      width: 150
    },
    {
      title: 'Doanh số cá nhân',
      dataIndex: 'doanhso',
      key: 'doanhso',
      width: 200
    }
  ]

  return (
    <div className='divtongquan_container'>
      <div className='tongquan_header'>
        <div className='tongquan_title'>
          <img src='/images/hoahonggt.png' alt='' width={24} height={24} />
          <div>Thành viên</div>
        </div>
        <div className='tongquan_descreption'>
          Note: Lịch sử mạng lưới đội nhóm hiển thị doanh số của đội nhóm và
          tính bằng USDT.
        </div>
      </div>
      <div className='lichsu_body'>
        <div className='mangluoi_header'>
          <div>
            <img src='/images/tien.png' alt='' width={30} height={30} />
            <div className='lichsu_tien'>Giao dịch nhóm</div>
            <div className='lichsu_tien'>0</div>
          </div>
          <div>
            <img src='/images/tien.png' alt='' width={30} height={30} />
            <div className='lichsu_tien'>Giao dịch cá nhân</div>
            <div className='lichsu_tien'>0</div>
          </div>
        </div>

        <div className='lichsu_footer'>
          <div className='divhinhthuc'>
            <span>Hình thức</span>
            <div className='divinputdate'>
              <input
                type='date'
                value={date}
                onChange={e => setDate(e.target.value)}
                pattern='d{2}/d{2}/d{4}'
                title='Định dạng: dd/mm/yyyy'
              />
            </div>
          </div>
          <div className='table-history'>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
              rowKey='time'
              scroll={{ x: 'max-content' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MangluoiLayout
