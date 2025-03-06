import React from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../../Components/Navbar/Navbar";
import BackButton from "../../Components/Button/BackButton/BackButton"
import PremiumBox from "../../Components/PremiumBox/PremiumBox";
import Footer from "../../Components/Footer/Footer";

import styles from './Upgrade.module.css'

// 📸 Import hình ảnh icon
import Img1 from "../../assets/img/Premium1.png";
import Img2 from "../../assets/img/Premium2.png";
import Img3 from "../../assets/img/Premium3.png";
import Img4 from "../../assets/img/Premium4.png";
import Img5 from "../../assets/img/Premium5.png";
import Img6 from "../../assets/img/Premium6.png";

const featureIcons = [Img1, Img2, Img3, Img4, Img5, Img6];

const premiumFeatures = [
  {
    title: "Học Mọi Lúc, Mọi Nơi với AI 24/7",
    description: "Trợ lý AI thông minh giải đáp thắc mắc, luyện tập giao tiếp, giúp bạn tiến bộ nhanh chóng.",
    img: featureIcons[0],
  },
  {
    title: "Kho Tài Liệu & Đề Thi Độc Quyền",
    description: "Biên soạn bởi chuyên gia, bám sát cấu trúc đề thi Đại học FPT, đảm bảo hiệu quả ôn luyện tối đa.",
    img: featureIcons[1],
  },
  {
    title: "Lộ Trình Cá Nhân Hóa, Tối Ưu Hiệu Quả",
    description:
      "Hệ thống phân tích năng lực, đưa ra lộ trình phù hợp, tiết kiệm thời gian học tập.",
      img: featureIcons[2],
    },
  {
    title: "Chinh Phục Kỳ Thi, Tự Tin Pass Môn",
    description:
      "Ngân hàng đề thi đa dạng, sát thực tế, giúp bạn làm quen và tự tin bước vào kỳ thi.",
      img: featureIcons[3],
  },
  {
    title: "Cộng Đồng Học Tập Sôi Động",
    description:
      "Trao đổi, chia sẻ kinh nghiệm, hỗ trợ lẫn nhau, tạo động lực học tập.",
      img: featureIcons[4],
  },
  {
    title: "Học Thử Miễn Phí, Trải Nghiệm Thực Tế",
    description:
      "Khám phá nội dung khóa học, đưa ra quyết định sáng suốt.",
      img: featureIcons[5],
  },
];


const Upgrade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className={styles.background}>
      <div className="main-layout">
        <div className={styles.container}>
          <Navbar />
          <BackButton to="/" label="Quay lại" /></div>
          <div className={styles.container}>
          <PremiumBox /></div>
          <h2 className={styles.title}>Mở khóa các tính năng Premium</h2>
        <div className={styles.featuresGrid}>
          {premiumFeatures.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img
                src={featureIcons[index]}
                alt={`Feature Icon ${index + 1}`}
                className={styles.featureIcon}
              />
              <div>
                <p className={`${styles.featureTitle} s6`}>{feature.title}</p>
                <p className={`${styles.featureDescription} b7`}>{feature.description}</p>

              </div>
            </div>
          ))}
          </div></div></div>
          <Footer />
    </div>
  );
};

export default Upgrade;
