import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// Components
import Navbar from "@Components/Navbar/Navbar";
// Assets
import completeImage from "@assets/Banner/Banner4.png";
import ArrowBackIcon from "@assets/Icons/BackArrow";
import ArrowNextIcon from "@assets/Icons/NextArrow";
//CSS
import styles from "./DialogueDone.module.css";

const DialogueDone: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lessonId = location.state?.lessonId || "1"; 

  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.title}>🎉 Chúc mừng! Bạn Đã xong hội thoại 🎉</h2>
      <img src={completeImage} alt="Đã xong" className={styles.image} />

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
