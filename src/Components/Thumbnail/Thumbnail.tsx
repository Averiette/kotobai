import React from "react";
import { Link } from "react-router-dom"; 
// Assets
import thumbnailImg from '@assets/Banner/Thumnail 1450px x 1080px.png'
//CSS
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
          
          <Link to="/signup">
            <button className={`${styles["Bluebtn"]} b6`}>
              Đăng ký tài khoản
            </button>
          </Link>
          
          <Link to="/login">
            <button className={`${styles["Subbtn"]} b6`}>
            Đăng nhập
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
