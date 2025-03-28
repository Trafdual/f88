import React from "react";
import { Input, Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
const WithdrawMoney = () => {
  return (
    <div className="WithdrawMoney">
      <div className="box-WithdrawMoney">
        <div className="WithdrawMoney-body">
          <form>
            <Card title="Xác nhận mật khẩu rút tiền">
              <div className="alert-warning-WithdrawMoney">
                <p>
                <FontAwesomeIcon icon={faExclamationCircle} /> mật khẩu rút tiền chưa cài đặt, vui lòng cài đặt mật khẩu rút
                  tiền trước
                </p>
              </div>
              <div className="item-btn-pass">
                <p>mật khẩu rút tiền</p>
                <Input.Password
                  placeholder="vui lòng nhập mật khẩu rút tiền của bạn"
                  style={{ marginBottom: 10 }}
                />
              </div>
              <div className="item-btn-pass">
                <p>Xác nhận mật khẩu rút tiền</p>
                <Input.Password
                  placeholder="Vui lòng xác nhận lại mật khẩu rút tiền của bạn"
                  style={{ marginBottom: 10 }}
                />
              </div>
              <div className="list-btn-rut">
                <Button block>gửi đi</Button>
                <Button block>huỷ bỏ</Button>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WithdrawMoney;

