import React, { useState } from "react";
import { Table, Typography, Select } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

// Dữ liệu mẫu
const initialData = [
  {
    key: "1",
    time: "2025-03-29 10:00",
    account: "Tài khoản A",
    amount: "100.000 VNĐ",
    method: "Chuyển khoản",
    status: "Thành công",
    type: "deposit",
    category: "FIAT",
  },
  {
    key: "2",
    time: "2025-03-29 15:30",
    account: "Tài khoản B",
    amount: "50.000 VNĐ",
    method: "Thẻ tín dụng",
    status: "Thành công",
    type: "deposit",
    category: "CRYPTO",
  },
  {
    key: "3",
    time: "2025-03-29 12:15",
    account: "Tài khoản C",
    amount: "200.000 VNĐ",
    method: "Ví điện tử",
    status: "Thất bại",
    type: "withdraw",
    category: "FIAT",
  },
  {
    key: "4",
    time: "2025-03-29 09:45",
    account: "Tài khoản D",
    amount: "150.000 VNĐ",
    method: "Chuyển khoản",
    status: "Thành công",
    type: "withdraw",
    category: "CRYPTO",
  },
];

const HistoryRut = () => {
  const [selectedFilter, setSelectedFilter] = useState("today");
  const [searchText, setSearchText] = useState("");

  // Lấy ngày hiện tại
  const today = dayjs();
  const yesterday = today.subtract(1, "day");
  const sevenDaysAgo = today.subtract(7, "day");
  const thirtyDaysAgo = today.subtract(30, "day");

  // Hàm lọc theo thời gian
  const filterByDate = (item) => {
    const itemDate = dayjs(item.time);

    switch (selectedFilter) {
      case "today":
        return itemDate.isSame(today, "day");
      case "yesterday":
        return itemDate.isSame(yesterday, "day");
      case "7days":
        return itemDate.isAfter(sevenDaysAgo);
      case "30days":
        return itemDate.isAfter(thirtyDaysAgo);
      default:
        return true;
    }
  };

  // Lọc dữ liệu theo ngày và tìm kiếm tài khoản
  const filteredData = initialData.filter(
    (item) =>
      filterByDate(item) &&
      item.account.toLowerCase().includes(searchText.toLowerCase())
  );
 const [selectedForm, setSelectedForm] = useState('ALL')

  const handleFormChange = value => {
    setSelectedForm(value)
  }
  return (
    <div className="box-history">
      <div className="history-header">
        <div className="title-history">
          <Title level={3}>Lịch sử Nạp/Rút tiền</Title>
        </div>
      </div>

      <div className="flex-history-member">
        <div className="flex-historyrut">

          <div className="box-vition-history">
            Thời gian 
            <button
              className={`btnhistoryrut ${selectedFilter === "today" ? "active" : ""}`}
              onClick={() => setSelectedFilter("today")}
            >
              Hôm nay
            </button>
            <button
              className={`btnhistoryrut ${selectedFilter === "yesterday" ? "active" : ""}`}
              onClick={() => setSelectedFilter("yesterday")}
            >
              Hôm qua
            </button>
            <button
              className={`btnhistoryrut ${selectedFilter === "7days" ? "active" : ""}`}
              onClick={() => setSelectedFilter("7days")}
            >
              Trong vòng 7 ngày
            </button>
            <button
              className={`btnhistoryrut ${selectedFilter === "30days" ? "active" : ""}`}
              onClick={() => setSelectedFilter("30days")}
            >
              Trong vòng 30 ngày
            </button>
          </div>
          <div>Số tiền</div>
          <div>
            Phân loại
            <Select
              defaultValue={selectedForm}
              style={{ width: 200, paddingLeft: "5px" }}
              onChange={handleFormChange}
            >
              <Select.Option value='ALL'>Tất cả </Select.Option>
              <Select.Option value="DEPOSIT">Cộng ty gửi tiền</Select.Option>
              <Select.Option value="DEPOSIT_PROMO">Thanh toán trực tuyển</Select.Option>
              <Select.Option value="WITHDRAW">Rút tiền trực tuyển</Select.Option>
              <Select.Option value="DEPOSIT_BONUS">Nạp rút thủ công</Select.Option>
              <Select.Option value="ACTIVITY_BONUS">Hoạt động ưu đãi</Select.Option>
              <Select.Option value="REFUND">Hoàn trả</Select.Option>
              <Select.Option value="REFUND_DAY">Hoàn trả ngày</Select.Option>
              <Select.Option value="VIP_BONUS">VIP BONUS</Select.Option>
              <Select.Option value="OTHER">Khác</Select.Option>
            </Select>
          </div>
        </div>
      </div>

      {/* Bảng dữ liệu */}
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
        locale={{ emptyText: " Không có bất kì thông tin nào" }}
      />
    </div>
  );
};

export default HistoryRut;
