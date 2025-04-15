import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import BtnBlue from '@Components/Button/Btnblue/Btnblue'
// Assets
import Logo from '@assets/logo-01.svg';
import MenuIcon from '@assets/Icons/Menu'
//CSS
import styles from "./NavbarIntro.module.css";

const NavbarIntro: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.navbarIntro}>
            <div className={styles.navbarLeft}>
                <Link to="/">
                <img src={Logo} alt="Logo" className={styles.logo} />
                </Link>
            </div>

            <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon className={styles.menuIcon} />
            </div>

            <div className={`${styles.navbarRight} ${menuOpen ? styles.open : ""}`}>
              <Link to="/login" className={`${styles.navLink} s6`}>Đăng nhập</Link>
              <BtnBlue text="Học ngay" to="/signup" className="s6" />
            </div>
        </div>
    );
};

export default NavbarIntro;
