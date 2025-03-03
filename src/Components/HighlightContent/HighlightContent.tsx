import React from "react";
import styles from "./HighlightContent.module.css";

const highlightData = [
  {
    id: 1,
    title: "GIÁO TRÌNH BÁM SÁT",
    icon: "📢",
    description: "Theo lộ trình các lớp JPD",
  },
  {
    id: 2,
    title: "HỌC TẬP CÙNG AI",
    icon: "⚡",
    description: "Chatbox xịn xò học tập khỏi lo",
  },
  {
    id: 3,
    title: "CỘNG ĐỒNG TƯƠNG TÁC",
    icon: "✨",
    description: "Cùng ôn - Cùng học - Cùng Pass",
  },
];

const HighlightContent: React.FC = () => {
  return (
    <div className={styles.container}>
      {highlightData.map((item) => {
        const words = item.title.split(" ");
        return (
          <div key={item.id} className={styles.card}>
            <h2 className={styles.title}>
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  {word}{" "}
                  {(index + 1) % 2 === 0 && index !== words.length - 1 && <br />}
                </React.Fragment>
              ))}
              <span className={styles.icon}>{item.icon}</span>
            </h2>
            <p className={`${styles.description} b6`}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightContent;
