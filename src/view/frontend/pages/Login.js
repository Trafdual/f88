import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onClose, onSwitch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (!username.trim()) {
      toast.error("Vui lòng nhập tên tài khoản!");
      return false;
    }
    if (!password.trim()) {
      toast.error("Vui lòng nhập mật khẩu!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Đăng nhập thành công!");
      console.log("Đăng nhập:", { username, password });
    }
  };

  return (
    <div className="box-sign-in">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-ovflow"></div>
      <div className="signInpassNext">
        <div className="close-form" onClick={onClose}></div>
        <div className="logoImages">
          <img
            src="https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/99cdae96e2/images/5f0bb3af787ef0b115a9ad12fb098cc1.png"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Item-form-resgeter">
            <label>Tên Tài Khoản:</label>
            <div className="item-flex-resgeter">
              <img src="/b2c57a84ceed3ce0c246bd45e8cb25af.png" alt="" />
              <input
                type="text"
                placeholder="Vui lòng nhập tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="Item-form-resgeter">
            <label>Mật Khẩu:</label>
            <div className="item-flex-resgeter">
              <img src="/92a08df08e28849cad42daed1b65c369.png" alt="" />
              <input
                type="password"
                placeholder="Vui lòng nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="btn-submit-sigin" type="submit">
            Đăng Nhập
          </button>
          <div className="btn-next-signup">
            <span>
              Bạn chưa có tài khoản?{" "}
              <Link
                to="/register"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch();
                }}
              >
                Đăng ký
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
