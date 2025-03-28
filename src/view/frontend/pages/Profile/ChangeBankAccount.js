import React from "react";
import { Form, Select, Input, Button, Alert } from "antd";

const { Option } = Select;
const ChangeBankAccount = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <div className="box-history">
         <div className="history-header">
        <div className="title-history">
        <h2>Chọn loại rút tiền</h2>
        </div>
      </div>
      
      <div className="box-changebank">
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
            label="Ngân hàng"
            name="bank"
            rules={[{ required: true, message: "Vui lòng chọn ngân hàng!" }]}
            >
            <Select placeholder="Chọn tên ngân hàng">
                <Option value="vietcombank">Vietcombank</Option>
                <Option value="techcombank">Techcombank</Option>
                <Option value="acb">ACB</Option>
                <Option value="bidv">BIDV</Option>
            </Select>
            </Form.Item>

            <Form.Item
            label="Số thẻ/tài khoản"
            name="accountNumber"
            rules={[
                { required: true, message: "Vui lòng nhập số thẻ/tài khoản!" },
            ]}
            >
            <Input placeholder="Nhập số thẻ/tài khoản" />
            </Form.Item>

            <Form.Item
            label="Tên thẻ/tài khoản"
            name="accountName"
            rules={[
                { required: true, message: "Vui lòng nhập tên thẻ/tài khoản!" },
            ]}
            >
            <Input placeholder="Nhập tên thẻ/tài khoản" />
            </Form.Item>

            <Alert
            message="Xin lưu ý rằng thông tin thanh toán sẽ chỉ được ghi lại một lần và không thể chỉnh sửa. Vui lòng kiểm tra cẩn thận trước khi lưu."
            type="warning"
            showIcon
            style={{ marginBottom: 16 }}
            />

            <Form.Item>
            <div className="btn-bank">
                <button type="submit">Gửi đi</button>
            </div>
            </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangeBankAccount;
