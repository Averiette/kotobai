import React from 'react';
import NavbarIntro from '../../Components/NavbarIntro/NavbarIntro'
import Footer from '../../Components/Footer/Footer'
import LogInBlock from '../../Components/LogInBlock/LogInBlock'
import styles from '../SignUp/SignUp.module.css';
import thumbnailImg from "../../assets/Banner/Thumnail 1450px x 1080px.png";


const LogIn: React.FC = () => {
  return (
    <div className="Container">
      <NavbarIntro />
      <div className={styles["thumbnail-container"]}>
      {/* Hình ảnh bên trái */}
      <div className={styles["thumbnail-container-left"]}>
        <img src={thumbnailImg} alt="Thumbnail" className={styles["thumbnail-img"]} />
      </div>

      {/* Nội dung bên phải */}
      <div className={styles["thumbnail-container-right"]}>
        <LogInBlock />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default LogIn;
