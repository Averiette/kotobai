import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import BtnBlue from '@Components/Button/Btnblue/Btnblue'
// Assets
import GoogleIcon from "@assets/Icons/Google";
import EyeOpenIcon from "@assets/Icons/EyeOpen";
import EyeClosedIcon from "@assets/Icons/EyeClosed";
//CSS
import styles from "./SignUpBlock.module.css";

const SignUpBlock: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className={styles.signupContainer}>
        <h3 className={styles.title}>ĐĂNG KÝ</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Email/Số điện thoại" className={styles.input} />
          <input type="text" placeholder="Tên" className={styles.input} />

          {/* Mật khẩu */}
          <div className={`${styles.passwordWrapper} ${styles.input}`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu (ít nhất 6 ký tự)"
            />
            <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>
          </div>

          {/* Xác nhận mật khẩu */}
          <div className={`${styles.passwordWrapper} ${styles.input}`}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu"
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles.eyeIcon}>
              {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>
          </div>

          <Link to="/login" className={styles.helperText}>Tôi đã có tài khoản!</Link>
          <BtnBlue text="Tạo tài khoản" to="/home" className={styles.submitButton} />
        </form>
            <button className={styles.googleButton}>
            <GoogleIcon className={styles.googleIcon} /> Tiếp tục bằng Google
            </button>
      </div>
    </div>
  );
};

export default SignUpBlock;
