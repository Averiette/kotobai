import React from 'react';
// Components
import NavbarIntro from '@Components/NavbarIntro/NavbarIntro'
import Footer from '@Components/Footer/Footer'
import SignUpBlock from '@Components/SignUpblock/SignUpBlock';
// Assets
import thumbnailImg from "assets/Banner/Thumnail 1450px x 1080px.png";
//CSS
import styles from '@Components/SignUpblock/SignUpBlock.module.css';

const SignUp: React.FC = () => {
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
        <SignUpBlock />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default SignUp;
