import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnBlue from "../Button/Btnblue/Btnblue";
import styles from "../SignUpblock/SignUpBlock.module.css";

import { ReactComponent as GoogleIcon } from "../../assets/Icons/Google.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/Icons/eye.svg";
import { ReactComponent as EyeClosedIcon } from "../../assets/Icons/hidden.svg";


const LogInBlock: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className={styles.signupContainer}>
        <h3 className={styles.title}>ĐĂNG NHẬP</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Email/Số điện thoại" className={styles.input} />

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

          <Link to="/login" className={styles.helperText}>Quên mật khẩu</Link>
          <BtnBlue text="Đăng nhập" to="/" className={styles.submitButton} />
        </form>
            <button className={styles.googleButton}>
            <GoogleIcon className={styles.googleIcon} /> Tiếp tục bằng Google
            </button>
      </div>
    </div>
  );
};

export default LogInBlock;
