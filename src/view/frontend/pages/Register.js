import React, { useState } from "react";  
import { Link } from "react-router-dom";  
import { ToastContainer, toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  

const Register = ({ onClose, onSwitch }) => {  
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [confirmMa, setConfirmMa] = useState(""); // State for referral code  

  const handleSubmit = (e) => {  
    e.preventDefault();  

    if (!username.trim()) {  
      toast.error("Tên tài khoản không được để trống!");  
      return;  
    }  
    if (!password) {  
      toast.error("Mật khẩu không được để trống!");  
      return;  
    }  
    if (password.length < 6) {  
      toast.error("Mật khẩu phải có ít nhất 6 ký tự!");  
      return;  
    }  
    if (password !== confirmPassword) {  
      toast.error("Mật khẩu nhập lại không khớp!");  
      return;  
    }  

    // You can add more validations here for confirmMa if needed  
    if (!confirmMa.trim()) {  
      toast.error("Mã giới thiệu không được để trống!");  
      return;  
    }  

    toast.success("Đăng ký tài khoản thành công!");  

    // Reset form fields after successful registration  
    setUsername("");  
    setPassword("");  
    setConfirmPassword("");  
    setConfirmMa("");  
  };  

  return (  
    <div className="box-sign-in">  
      <div className="bg-ovflow"></div>  
      <div className="signInpassNext">  
        <div className="close-form" onClick={onClose}></div>  

        <div className="logoImages">  
          <img  
            src="/5f0bb3af787ef0b115a9ad12fb098cc1.png"  
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
                value={username}  
                onChange={(e) => setUsername(e.target.value)}  
                placeholder="Vui lòng nhập tên tài khoản"  
              />  
            </div>  
          </div>  

          <div className="Item-form-resgeter">  
            <label>Mật Khẩu:</label>  
            <div className="item-flex-resgeter">  
              <img src="/92a08df08e28849cad42daed1b65c369.png" alt="" />  
              <input  
                type="password"  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}  
                placeholder="Vui lòng nhập mật khẩu"  
              />  
            </div>  
          </div>  

          <div className="Item-form-resgeter">  
            <label>Nhập lại mật khẩu:</label>  
            <div className="item-flex-resgeter">  
              <img src="/92a08df08e28849cad42daed1b65c369.png" alt="" />  
              <input  
                type="password"  
                value={confirmPassword}  
                onChange={(e) => setConfirmPassword(e.target.value)}  
                placeholder="Vui lòng nhập lại mật khẩu"  
              />  
            </div>  
          </div>  

          <div className="Item-form-resgeter">  
            <label>Mã giới thiệu:</label>  
            <div className="item-flex-resgeter">  
              <img src="/92a08df08e28849cad42daed1b65c369.png" alt="" />  
              <input  
                type="text" // Change to text for better flexibility  
                value={confirmMa}  
                onChange={(e) => setConfirmMa(e.target.value)}  
                placeholder="Vui lòng nhập Mã giới thiệu"  
              />  
            </div>  
          </div>  

          <button className="btn-submit-sigin" type="submit">  
            Đăng Ký  
          </button>  
          <div className="btn-next-signup">  
            <span>  
              Bạn đã có tài khoản?{" "}  
              <Link to="/login" onClick={(e) => { e.preventDefault(); onSwitch(); }}>  
                Đăng nhập  
              </Link>  
            </span>  
          </div>  
        </form>  
      </div>  
      <ToastContainer />  
    </div>  
  );  
};  

export default Register;  