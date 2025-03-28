import React, { useState } from "react";
import { Table, Typography, DatePicker, Select } from "antd";

const { RangePicker } = DatePicker;
const { Title } = Typography;

const History = () => {
  const data = []; 

  const columns = [
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      width: 150,
    },
    {
      title: "Số lần cược",
      dataIndex: "betCount",
      key: "betCount",
      width: 150,
    },
    {
      title: "Số tiền đặt cược",
      dataIndex: "betAmount",
      key: "betAmount",
      width: 200,
    },
    {
      title: "Tiền cược hợp lệ",
      dataIndex: "validBet",
      key: "validBet",
      width: 200,
    },
    {
      title: "Kết quả",
      dataIndex: "result",
      key: "result",
      width: 200,
    },
  ];
  const summaryData = {
    winAmount: 0,
    loseAmount: 0,
    estimatedProfit: 0,
  };

  const [selectedForm, setSelectedForm] = useState("ALL");
  const [dates, setDates] = useState([null, null]);

  const handleFormChange = (value) => {
    setSelectedForm(value);
  };

  const handleDateChange = (dates) => {
    setDates(dates);
  };

  return (
    <div className="box-history">
      <div className="history-header">
        <div className="title-history">
          <Title level={2}>Lịch sử đặt cược</Title>
        </div>
      </div>
      <div className="body-historys" style={{ padding: "20px" }}>
        <p className="price-lose">Tiền thắng: <span>{summaryData.winAmount}</span></p>
        <p className="price-lose">Tiền thua: <span>{summaryData.loseAmount}</span></p>
        <p className="price-lose">Tiền lãi ước tính: <span>{summaryData.estimatedProfit}</span></p>
        <div className="flex-hinhthuc">
          <div style={{ marginBottom: "20px" }} className="selec-profile">
            <label>Hình thức: </label>
            <Select
              defaultValue={selectedForm}
              style={{ width: 120, }}
              onChange={handleFormChange}
            >
              <Select.Option value="ALL">ALL</Select.Option>
              <Select.Option value="FORM_1">FORM 1</Select.Option>
              <Select.Option value="FORM_2">FORM 2</Select.Option>
              {/* Thêm các lựa chọn khác nếu cần */}
            </Select>
          </div>

          <div style={{ marginBottom: "20px" }} className="selec-bottom">
            <RangePicker
              value={dates}
              onChange={handleDateChange}
              format="MM/DD/YYYY" // Định dạng hiển thị của ngày tháng
              style={{ marginLeft: "8px" }}
            />
          </div>
        </div>
      </div>


      <div className="table-history">
      <Table
  dataSource={data}
  columns={columns}
  pagination={false}
  rowKey="time"
  scroll={{ x: "max-content" }} 
/>
      </div>
    </div>
  );
};

export default History;
