import React from "react";
import { Link } from "react-router-dom";
import BtnBlue from "../Button/Btnblue/Btnblue";
import styles from "./NavbarIntro.module.css";
import { ReactComponent as Logo } from "../../assets/logo-01.svg";

const NavbarIntro: React.FC = () => {
    return (
      <div className={styles.navbarIntro}>
        <div className={styles.navbarLeft}>
          <Link to="/intro">
            <Logo className={styles.logo} />
          </Link>
        </div>
  
        <div className={styles.navbarRight}>
          <Link to="/login" className={`${styles.navLink} s6`}>Đăng nhập</Link>
          <BtnBlue text="Học ngay" to="/signup" className="s6" />
        </div>
      </div>
    );
  };
  
  export default NavbarIntro;
