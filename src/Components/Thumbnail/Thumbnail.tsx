import React from "react";
import { Link } from "react-router-dom"; 
import thumbnailImg from "../../assets/Banner/Thumnail 1450px x 1080px.png";
import styles from "./Thumbnail.module.css";

const Thumbnail: React.FC = () => {
  return (
    <div className={styles["thumbnail-container"]}>
      {/* Hình ảnh bên trái */}
      <div className={styles["thumbnail-container-left"]}>
        <img src={thumbnailImg} alt="Thumbnail" className={styles["thumbnail-img"]} />
      </div>

      {/* Nội dung bên phải */}
      <div className={styles["thumbnail-container-right"]}>
        <h2 className={styles["large-title"]}>
          NẮM CHẮC KIẾN THỨC<br /> NHẬT NGAY PASS MÔN
        </h2>
        <div className={styles["button-container"]}>
          {/* Dùng Link để điều hướng đến trang login */}
          <Link to="/login">
            <button className={styles["Bluebtn"]}>
              Đăng nhập
            </button>
          </Link>
          {/* Dùng Link để điều hướng đến trang signup */}
          <Link to="/signup">
            <button className={styles["Subbtn"]}>
              Đăng ký tài khoản
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
