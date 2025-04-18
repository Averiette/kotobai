import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { loginUser } from "../../redux/auth/authSlice";
import { googleLogin } from "../../redux/auth/googleSlice";
import { useGoogleLogin } from "@react-oauth/google";

// Components
import BtnBlue from "@Components/Button/Btnblue/Btnblue";
import GoogleIcon from "@assets/Icons/Google";
import EyeOpenIcon from "@assets/Icons/EyeOpen";
import EyeClosedIcon from "@assets/Icons/EyeClosed";
import Cookies from "js-cookie";
// CSS
import styles from "@Components/SignUpblock/SignUpBlock.module.css";

const LogInBlock: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error, loading } = useAppSelector((state) => state.auth);
  const { loading: googleLoading, error: googleError } = useAppSelector(
    (state) => state.google
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Danh sách tài khoản test
    const validAccounts = [
      { email: "test@gmail.com", password: "123456" },
      { email: "phucontse172629@fpt.edu.vn", password: "123456" }
    ];

    const isTestAccount = validAccounts.some(
      (acc) => acc.email === email && acc.password === password
    );

    if (isTestAccount) {
      console.log("✅ Đăng nhập thành công với tài khoản test.");
      navigate("/home");
      return;
    }

    // 🔁 Nếu không phải tài khoản test → gọi Redux login bình thường
    const resultAction = await dispatch(
      loginUser({ emailAddress: email, password })
    );
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/home");
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const accessToken = tokenResponse.access_token;
        const resultAction = await dispatch(googleLogin({ accessToken }));

        navigate("/home");

        if (googleLogin.rejected.match(resultAction)) {
          console.error("Google login failed:", resultAction.payload);
        }
      } catch (err) {
        console.error("Unexpected error during Google login:", err);
        navigate("/home");
      }
    },
    onError: (error) => {
      console.error("Google login trình duyệt thất bại:", error);
      navigate("/home");
    },
    scope: "profile email",
    flow: "implicit",
  });

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
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeIcon}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>
          </div>

          {(error || googleError) && (
            <p className={`${styles.errorMessage} b7`}>{error || googleError}</p>
          )}

          <Link to="#" className={`${styles.helperText} b7`}>
            Quên mật khẩu
          </Link>

          <BtnBlue
            text={loading ? "Đang đăng nhập..." : "Đăng nhập"}
            className={`${styles.submitButton} b6`}
          />
        </form>

        <button
          onClick={() => loginWithGoogle()}
          className={`${styles.googleButton} s6`}
          disabled={googleLoading}
        >
          <GoogleIcon className={styles.googleIcon} />
          {googleLoading ? "Đang xử lý..." : "Tiếp tục bằng Google"}
        </button>
      </div>
    </div>
  );
};

export default LogInBlock;
