import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import banner1 from "../../assets/Banner/Banner1.png";
import banner2 from "../../assets/Banner/Banner2.png";
import banner3 from "../../assets/Banner/Banner3.png";
import "./bannerslider.css";

const banners = [banner1, banner2, banner3];

const BannerSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <motion.img
          key={index}
          src={banners[index]}
          alt={`Banner ${index + 1}`}
          className="banner-image"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
        />
      </div>
      <div className="banner-navigation">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`nav-dot ${i === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
