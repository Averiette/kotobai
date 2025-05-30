// src/components/PremiumBox.tsx
import React from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { createPayment } from "@redux/Slices/Payment/paymentSlice";
import CheckIcon from "@assets/Icons/Check";
import DisabledCheckIcon from "@assets/Icons/DisabledCheckIcon";
import styles from "./PremiumBox.module.css";

interface PremiumBoxProps {
  title: string;
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  features: string[];
  id: string;
}

const PremiumBox: React.FC<PremiumBoxProps> = ({
  title,
  price,
  originalPrice,
  isPopular,
  features,
  id,
}) => {
  const dispatch = useAppDispatch();

  const handleSelect = async () => {
    const packageId =
      id === "saving"
        ? "fe64a817-8c58-40eb-6eff-08dd7cead1e3"
        : id === "popular"
        ? "d0416828-f557-48f7-6f00-08dd7cead1e3"
        : "";

    if (!packageId) return;

    try {
      const result = await dispatch(createPayment(packageId)).unwrap();
      window.location.href = result; // Chuyển hướng đến PayOS
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

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
              {title === "Gói miễn phí"
                ? "Miễn phí"
                : title === "Gói tiết kiệm"
                ? "Tiết kiệm nhất"
                : "Giá gốc "}
              <span className={styles.strikethrough}>{originalPrice}</span>
            </p>
          )}
          <button
            className={`${isPopular ? styles.selectButtonPopular : styles.selectButton} s6`}
            onClick={handleSelect}
          >
            Chọn gói
          </button>
          <div className={styles.divider}></div>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => {
              const isDisabled = feature.startsWith("- ");
              return (
                <li
                  key={index}
                  className={`${isDisabled ? styles.disabledFeature : styles.enabledFeature} b7`}
                >
                  {isDisabled ? (
                    <DisabledCheckIcon className={styles.disabledIcon} />
                  ) : (
                    <CheckIcon className={styles.CheckIcon} />
                  )}
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

export default PremiumBox;
