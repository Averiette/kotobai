import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./DialogueDone.module.css";

// Import Navbar
import Navbar from "../../Components/Navbar/Navbar";

// Import hình ảnh minh họa hoàn thành
import completeImage from "../../assets/Banner/Banner4.png";

// Import icon SVG
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/back-arrow.svg";
import { ReactComponent as ArrowNextIcon } from "../../assets/icons/next-arrow.svg";

const DialogueDone: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lessonId = location.state?.lessonId || "1"; // Nếu không có lessonId, dùng giá trị mặc định

  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.title}>🎉 Chúc mừng! Bạn đã hoàn thành hội thoại 🎉</h2>
      <img src={completeImage} alt="Hoàn thành" className={styles.image} />

      <div className={styles.buttonGroup}>
        <button className={`${styles.button} s6`} onClick={() => navigate(`/lesson/${lessonId}`)}>
          <ArrowBackIcon className={styles.icon} /> Bài học
        </button>
        <button className={`${styles.button} s6`} onClick={() => navigate("/")}>
          Trang chủ <ArrowNextIcon className={styles.icon} /> 
        </button>
      </div>
    </div>
  );
};

export default DialogueDone;
