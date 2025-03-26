import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Assets
import banner1 from "@assets/Banner/Banner5.png";
import banner2 from "@assets/Banner/Banner2.png";
import banner3 from "@assets/Banner/Banner3.png";
import banner1Tablet from "@assets/Banner/banner5_tablet.png";
import banner2Tablet from "@assets/Banner/banner2_tablet.png";
import banner3Tablet from "@assets/Banner/banner3_tablet.png";
import banner1Mobile from "@assets/Banner/Banner5_Mobile.png";
import banner2Mobile from "@assets/Banner/Banner2_Mobile.png";
import banner3Mobile from "@assets/Banner/Banner3_Mobile.png";
// CSS
import styles from "./bannerSlider.module.css"; 

const bannersDesktop = [banner1, banner2, banner3];
const bannersTablet = [banner1Tablet, banner2Tablet, banner3Tablet];
const bannersMobile = [banner1Mobile, banner2Mobile, banner3Mobile];

const BannerSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [currentBanners, setCurrentBanners] = useState(bannersDesktop);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        setCurrentBanners(bannersMobile);
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setCurrentBanners(bannersTablet);
      } else {
        setCurrentBanners(bannersDesktop);
      }
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % currentBanners.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentBanners]);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerWrapper}>
        <motion.img
          key={index}
          src={currentBanners[index]}
          alt={`Banner ${index + 1}`}
          className={styles.bannerImage}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
        />
      </div>
      <div className={styles.bannerNavigation}>
        {currentBanners.map((_, i) => (
          <span
            key={i}
            className={`${styles.navDot} ${i === index ? styles.active : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
