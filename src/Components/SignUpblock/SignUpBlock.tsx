// src/Components/SignUpblock/SignUpBlock.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { registerUser } from "@redux/auth/registerAuthSlice";
import { googleLogin } from "../../redux/auth/googleSlice";
import { useGoogleLogin } from "@react-oauth/google";

// Components
import BtnBlue from "@Components/Button/Btnblue/Btnblue";
// Assets
import GoogleIcon from "@assets/Icons/Google";
import EyeOpenIcon from "@assets/Icons/EyeOpen";
import EyeClosedIcon from "@assets/Icons/EyeClosed";
// CSS
import styles from "./SignUpBlock.module.css";

const SignUpBlock: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading: registerLoading, error: registerError } = useAppSelector(
    (state) => state.register
  );
  const { loading: googleLoading, error: googleError } = useAppSelector(
    (state) => state.google
  );

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    emailOrPhone: "",
    name: "",
    password: "",
    confirmPassword: ""
  });

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidPhone = (value: string) => /^0\d{9}$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formErrors = {
      emailOrPhone: "",
      name: "",
      password: "",
      confirmPassword: ""
    };

    if (!(isValidEmail(emailOrPhone) || isValidPhone(emailOrPhone))) {
      formErrors.emailOrPhone = "Email/SĐT chưa đúng";
    }

    if (!name.trim()) {
      formErrors.name = "Tên không được để trống";
    }

    if (!password) {
      formErrors.password = "Mật khẩu không được để trống";
    }

    if (confirmPassword !== password) {
      formErrors.confirmPassword = "Mật khẩu chưa trùng khớp";
    }

    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some((msg) => msg !== "");
    if (!hasErrors) {
      const resultAction = await dispatch(
        registerUser({
          fullName: name,
          email: emailOrPhone,
          password,
        })
      );

      if (registerUser.fulfilled.match(resultAction)) {
        navigate("/home");
      } else {
        console.error("Đăng ký thất bại:", resultAction.payload);
      }
    }
  };

  const handleSignUpWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const resultAction = await dispatch(
          googleLogin({ accessToken: tokenResponse.access_token })
        );

        if (googleLogin.rejected.match(resultAction)) {
          console.error("Google đăng ký thất bại:", resultAction.payload);
        }

        navigate("/home");
      } catch (error) {
        console.error("Lỗi không xác định khi đăng ký Google:", error);
        navigate("/home");
      }
    },
    onError: (error) => {
      console.error("Google đăng ký trình duyệt thất bại:", error);
      navigate("/home");
    },
    flow: "implicit",
    scope: "profile email",
  });

  return (
    <div>
      <div className={styles.signupContainer}>
        <h3 className={styles.title}>ĐĂNG KÝ</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email/Số điện thoại"
            className={styles.input}
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          {errors.emailOrPhone && (
            <p className={`${styles.errorMessage} b7`}>{errors.emailOrPhone}</p>
          )}

          <input
            type="text"
            placeholder="Tên"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className={`${styles.errorMessage} b7`}>{errors.name}</p>}

          <div className={`${styles.passwordWrapper} ${styles.input}`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
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
          {errors.password && <p className={`${styles.errorMessage} b7`}>{errors.password}</p>}

          <div className={`${styles.passwordWrapper} ${styles.input}`}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={styles.eyeIcon}
            >
              {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className={`${styles.errorMessage} b7`}>{errors.confirmPassword}</p>
          )}

          <Link to="/login" className={`${styles.helperText} b7`}>
            Tôi đã có tài khoản!
          </Link>

          {registerError && (
            <p className={`${styles.errorMessage} b7`}>{registerError}</p>
          )}
          {googleError && (
            <p className={`${styles.errorMessage} b7`}>{googleError}</p>
          )}

          <BtnBlue
            text={registerLoading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
            className={`${styles.submitButton} b6`}
          />
        </form>

        <button
          onClick={() => handleSignUpWithGoogle()}
          className={`${styles.googleButton} b7`}
          disabled={googleLoading}
        >
          <GoogleIcon className={styles.googleIcon} />
          {googleLoading ? "Đang xử lý..." : "Tiếp tục bằng Google"}
        </button>
      </div>
    </div>
  );
};

export default SignUpBlock;
