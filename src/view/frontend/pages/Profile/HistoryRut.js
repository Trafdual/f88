import React, { useState } from "react";
import { Table, Typography, Input, Radio } from "antd";

const { Title } = Typography;

// Dữ liệu nạp và rút tiền mẫu
const initialDepositData = [
  {
    key: "1",
    time: "2025-03-28 10:00",
    account: "Tài khoản A",
    amount: "100.000 VNĐ",
    method: "Chuyển khoản",
    status: "Thành công",
    type: "deposit",
    category: "FIAT",
  },
  {
    key: "2",
    time: "2025-03-27 15:30",
    account: "Tài khoản B",
    amount: "50.000 VNĐ",
    method: "Thẻ tín dụng",
    status: "Thành công",
    type: "deposit",
    category: "CRYPTO",
  },
];

const initialWithdrawData = [
  {
    key: "3",
    time: "2025-03-26 12:15",
    account: "Tài khoản C",
    amount: "200.000 VNĐ",
    method: "Ví điện tử",
    status: "Thất bại",
    type: "withdraw",
    category: "FIAT",
  },
  {
    key: "4",
    time: "2025-03-25 09:45",
    account: "Tài khoản D",
    amount: "150.000 VNĐ",
    method: "Chuyển khoản",
    status: "Thành công",
    type: "withdraw",
    category: "CRYPTO",
  },
];

const HistoryRut = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = [...initialDepositData, ...initialWithdrawData].filter(
    (item) =>
      (selectedCategory === null || item.category === selectedCategory) &&
      (selectedType === null || item.type === selectedType)
  );

  return (
    <div className="box-history">
      <div className="history-header">
        <div className="title-history">
          <Title level={3}>Lịch sử Nạp/Rút tiền</Title>
        </div>
      </div>

      <div className="flex-history-member">
        <div className="box-history-rut">
          <Title level={4}>
            Số dư ước tính:{" "}
            <span style={{ color: "green" }}>0.00 VNĐ ~ 0 USDT</span>
          </Title>
        </div>

        <div className="flex-historyrut">
          <div className="box-vition-history">
            <Radio.Group onChange={handleTypeChange} value={selectedType}>
              <Radio value="deposit">Nạp tiền</Radio>
              <Radio value="withdraw">Rút tiền</Radio>
              <Radio value={null}>Tất cả</Radio>
            </Radio.Group>

            <Radio.Group onChange={handleCategoryChange} value={selectedCategory}>
              <Radio value="FIAT">FIAT</Radio>
              <Radio value="CRYPTO">CRYPTO</Radio>
              <Radio value={null}>Tất cả</Radio>
            </Radio.Group>
          </div>
          <Input.Search
            placeholder="Tìm kiếm"
            style={{ width: 200 }}
            onSearch={(value) => console.log(value)}
          />
        </div>
      </div>

      <Table
  className="table-filters"
  dataSource={filteredData}
  columns={[
    { title: "Thời gian", dataIndex: "time", key: "time", width: 150 },
    { title: "Tài khoản", dataIndex: "account", key: "account", width: 200 },
    { title: "Số tiền", dataIndex: "amount", key: "amount", width: 200 },
    { title: "Hình thức", dataIndex: "method", key: "method", width: 200 },
    { title: "Trạng thái", dataIndex: "status", key: "status", width: 150 },
  ]}
  scroll={{ x: "max-content" }} 
/>
    </div>
  );
};

export default HistoryRut;
