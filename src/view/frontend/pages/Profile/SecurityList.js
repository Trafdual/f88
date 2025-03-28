import React, { useState } from "react";
import { Select } from "antd";
import { Form, Input, Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
const { Option } = Select;

const SecurityList = () => {
  const [activeTab, setActiveTab] = useState("");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div className="ctnr">
      <div className="WithdrawApplication">
        <div className="list-withdraw-header list-tabs-rutrien">
          <div
            className={`item-withdraw-header ${
              activeTab === "taikhoan" ? "active" : ""
            }`}
            onClick={() => setActiveTab("taikhoan")}
          >
            <div className="icon-banking"></div>
            <span>Tài khoản </span>
          </div>
          <div
            className={`item-withdraw-header ${
              activeTab === "doimk" ? "active" : ""
            }`}
            onClick={() => setActiveTab("doimk")}
          >
            <div className="icon-banking"></div>
            <span>Đổi mật khẩu</span>
          </div>

          <div
            className={`item-withdraw-header ${
              activeTab === "doimp" ? "active" : ""
            }`}
            onClick={() => setActiveTab("doimp")}
          >
            <div className="icon-banking"></div>
            <span>Đổi mã pin</span>
          </div>
        </div>

        <div className="withdraw-content">
          {activeTab === "taikhoan" && (
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              initialValues={{ username: "user123" }}
            >
              <div className="WithdrawMoney">
                <div className="box-WithdrawMoney">
                  <div className="WithdrawMoney-body">
                    <form>
                      <Card title="Thông tin cá nhân">
                        <Form.Item name="username">
                          <Input disabled placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                          name="newPassword"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập mật khẩu mới!",
                            },
                          ]}
                        >
                          <Input.Password placeholder="Nhập mật khẩu mới" />
                        </Form.Item>

                        <Form.Item
                          name="confirmPassword"
                          dependencies={["newPassword"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng xác nhận mật khẩu!",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("newPassword") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error("Mật khẩu không khớp!")
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password placeholder="Nhập lại mật khẩu" />
                        </Form.Item>

                        <Form.Item>
                        <div className="list-btn-rut">
                           <Button block>Gửi đi</Button>
                         </div>
                        </Form.Item>
                      </Card>
                    </form>
                  </div>
                </div>
              </div>
            </Form>
          )}

          {activeTab === "doimk" && (
           <div className="WithdrawMoney">
                 <div className="box-WithdrawMoney">
                   <div className="WithdrawMoney-body">
                     <form>
                       <Card title="Đổi mật khẩu">
                         <div className="alert-warning-WithdrawMoney">
                           <p>
                           <FontAwesomeIcon icon={faExclamationCircle} /> Thay đổi mật khẩu giúp tăng cường bảo mật cho tài khoản của bạn.
                           </p>
                         </div>
                         <div className="item-btn-pass">
                           <p>mật khẩu cũ</p>
                           <Input.Password
                             placeholder="vui lòng nhập mật khẩu cũ của bạn"
                             style={{ marginBottom: 10 }}
                           />
                         </div>
                         <div className="item-btn-pass">
                           <p> Mật khẩu mới</p>
                           <Input.Password
                             placeholder="Mật khẩu mới"
                             style={{ marginBottom: 10 }}
                           />
                         </div>
                         <div className="item-btn-pass">
                           <p> Nhập lại mật khẩu mới</p>
                           <Input.Password
                             placeholder="Nhập lại mật khẩu mới"
                             style={{ marginBottom: 10 }}
                           />
                         </div>
                         <div className="list-btn-rut">
                           <Button block>Xác nhận</Button>
                         </div>
                       </Card>
                     </form>
                   </div>
                 </div>
               </div>
          )}

          {activeTab === "doimp" && (
           <div className="WithdrawMoney">
           <div className="box-WithdrawMoney">
             <div className="WithdrawMoney-body">
               <form>
                 <Card title="Đổi mã pin">
                   <div className="alert-warning-WithdrawMoney">
                     <p>
                     <FontAwesomeIcon icon={faExclamationCircle} /> Việc thay đổi mã PIN giúp hệ thống xác nhận tài khoản thuộc về bạn, bảo vệ thông tin cá nhân và nâng cao an ninh cho tài khoản của bạn.
                     </p>
                   </div>
                   <div className="item-btn-pass">
                     <p>Mật khẩu rút tiền mới</p>
                     <Input.Password
                       placeholder="Nhập mật khẩu rút tiền mới"
                       style={{ marginBottom: 10 }}
                     />
                   </div>
                   <div className="item-btn-pass">
                     <p> Xác nhận mật khẩu rút tiền</p>
                     <Input.Password
                       placeholder="Xác nhận mật khẩu rút tiền mới"
                       style={{ marginBottom: 10 }}
                     />
                   </div>
                  
                   <div className="list-btn-rut">
                     <Button block>Xác nhận</Button>
                   </div>
                 </Card>
               </form>
             </div>
           </div>
         </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityList;
