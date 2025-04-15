import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { loginUser } from "../../redux/auth/authSlice";
// Components
import BtnBlue from '@Components/Button/Btnblue/Btnblue';
// Assets
import GoogleIcon from "@assets/Icons/Google";
import EyeOpenIcon from "@assets/Icons/EyeOpen";
import EyeClosedIcon from "@assets/Icons/EyeClosed";
//CSS
import styles from "@Components/SignUpblock/SignUpBlock.module.css";

const LogInBlock: React.FC = () => {
  const navigate = useNavigate(); 
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector(state => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ emailAddress: email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/home");
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

          {error && <p className={styles.errorMessage}>{error}</p>}

          <Link to="#" className={`${styles.helperText} b6`}>Quên mật khẩu</Link>
          <BtnBlue text={loading ? "Đang đăng nhập..." : "Đăng nhập"} className={`${styles.submitButton} b6`} />
        </form>

        <button className={`${styles.googleButton} s6`}>
          <GoogleIcon className={styles.googleIcon} /> Tiếp tục bằng Google
        </button>
      </div>
    </div>
  );
};

export default LogInBlock;