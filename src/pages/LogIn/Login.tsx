import React from 'react';
// Components
import NavbarIntro from '@Components/NavbarIntro/NavbarIntro'
import Footer from '@Components/Footer/Footer'
import LogInBlock from '@Components/LogInBlock/LogInBlock'
// Assets
import thumbnailImg from "@assets/Banner/Thumnail 1450px x 1080px.png";
//CSS
import styles from './Login.module.css';

const LogIn: React.FC = () => {
  return (
    <div className="Container">
      <NavbarIntro />
      <div className={styles["thumbnailContainer"]}>
        {/* Hình ảnh bên trái */}
        <div className={styles["thumbnailContainerLeft"]}>
          <img src={thumbnailImg} alt="Thumbnail" className={styles["thumbnailImg"]} />
        </div>

        {/* Nội dung bên phải */}
        <div className={styles["thumbnailContainerRight"]}>
          <LogInBlock />
        </div>
    </div>
      <Footer />
    </div>
  );
};

export default LogIn;
