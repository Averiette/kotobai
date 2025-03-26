import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Components
import BtnBlue from '@Components/Button/Btnblue/Btnblue'
// Assets
import GoogleIcon from "@assets/Icons/Google";
import EyeOpenIcon from "@assets/Icons/EyeOpen";
import EyeClosedIcon from "@assets/Icons/EyeClosed";
//CSS
import styles from "../SignUpblock/SignUpBlock.module.css";

const LogInBlock: React.FC = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tài khoản hợp lệ
    const validEmail = "test@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      // ✅ Đăng nhập thành công
      setErrorMessage("");
      navigate("/"); 
    } else {
      // ❌ Sai tài khoản/mật khẩu
      setErrorMessage("❌ Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div>
      <div className={styles.signupContainer}>
        <h3 className={styles.title}>ĐĂNG NHẬP</h3>
        <form className={`${styles.form} b6`} onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email/Số điện thoại"
            className={`${styles.input} b`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={`${styles.passwordWrapper} ${styles.input} b6`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu (ít nhất 6 ký tự)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>
          </div>

          {/* Hiển thị thông báo lỗi nếu có */}
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

          <Link to="#" className={`${styles.helperText} b6`}>Quên mật khẩu</Link>
          <BtnBlue text="Đăng nhập" type="submit" className={`${styles.submitButton} b6`} />
        </form>

        <button className={`${styles.googleButton} s6`}>
          <GoogleIcon className={styles.googleIcon} /> Tiếp tục bằng Google
        </button>
      </div>
    </div>
  );
};

export default LogInBlock;
