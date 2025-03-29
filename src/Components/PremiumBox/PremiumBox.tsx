import React from "react";
import styles from "./PremiumBox.module.css";
import CheckIcon from "@assets/Icons/Check";
import DisabledCheckIcon from "@assets/Icons/DisabledCheckIcon";


interface PremiumBoxProps {
  title: string;
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  features: string[];
}

const PremiumBox: React.FC<PremiumBoxProps> = ({ title, price, originalPrice, isPopular, features }) => {
  return (
    <div className={styles.container}>
      <div className={styles.premiumContaier}>
        <div className={styles.premiumBox}>
          <div className={styles.header}>
            {isPopular && <span className={`${styles.popularBadge} s9`}>Phổ biến nhất</span>}
          </div>
          <h3 className={styles.price}>{price}</h3>
          {originalPrice && (
            <p className={`${isPopular ? styles.originalPricePopular : styles.originalPrice} s7`}>
              {title === "Gói miễn phí" ? "Miễn phí" : title === "Gói tiết kiệm" ? "Tiết kiệm nhất" : "Giá gốc "} 
              <span className={styles.strikethrough}>{originalPrice}</span>
            </p>
          )}
          <button className={`${isPopular ? styles.selectButtonPopular : styles.selectButton} s6`}>Chọn gói</button>            
          <div className={styles.divider}></div>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => {
              const isDisabled = feature.startsWith("-");
              return (
              <li key={index} className={`${isDisabled ? styles.disabledFeature : styles.enabledFeature} b7`}>
                {isDisabled ? <DisabledCheckIcon className={styles.disabledIcon} /> : <CheckIcon className={styles.CheckIcon} />}
                {feature.replace(/^- /, "")}
              </li>
              );
            })}
          </ul>   
        </div>
      </div>
    </div>
  );
};


const PremiumPlans = () => {
  return (
    <div className={styles.premiumContainer}>
      <PremiumBox 
        title="Gói miễn phí"
        price="0đ/tháng"
        originalPrice=" "
        features={[
          "Mở khóa toàn bộ bài tập",
          "10 câu hỏi với AI mỗi ngày",
          "- Cá nhân hóa nội dung học tập",
          "- Liên tục cập nhật đề thi mới",
          "- Thi thử như thi thật"
        ]}
      />

      <PremiumBox 
        title="Gói tiết kiệm"
        price="45.000đ/tháng"
        originalPrice=" "
        features={[
          "Mở khóa toàn bộ bài tập",
          "AI giải đáp toàn diện câu hỏi",
          "Cá nhân hóa nội dung học tập",
          "Liên tục cập nhật đề thi mới",
          "Thi thử như thi thật"
        ]}
      />

      <PremiumBox 
        title="Phổ biến nhất"
        price="144.000đ/kỳ"
        originalPrice="180.000đ"
        isPopular
        features={[
          "Mở khóa toàn bộ bài tập",
          "AI giải đáp toàn diện câu hỏi",
          "Cá nhân hóa nội dung học tập",
          "Liên tục cập nhật đề thi mới",
          "Thi thử như thi thật"
        ]}
      />
    </div>
  );
};

export default PremiumPlans;