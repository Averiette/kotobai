import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./PremiumPopup.module.css"; 
import BtnBlue from "../Button/Btnblue/Btnblue"

// Import Assets
import { ReactComponent as CheckIcon } from "../../assets/Icons/check.svg";
import { ReactComponent as CloseIcon } from "../../assets/Icons/close.svg";

const PremiumPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        isOpen && (
            <div className={styles.popupOverlay}>
                <div className={styles.popupContent}>
                    {/* Nút đóng */}
                    <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                        <CloseIcon className={styles.closeIcon} />
                    </button>

                    {/* Banner */}
                    <div className={styles.textCenter}>
                        <p className={`${styles.discountBadge} h7`}>GIẢM GIÁ 20%</p>
                        <h4 className={styles.title}>
                            Học <span className={styles.highlightBlue}>nhanh hơn</span> với{" "}
                            <span className={styles.highlightDarkBlue}>Premium</span>
                        </h4>
                    </div>

                    {/* Lợi ích */}
                    <ul className={`${styles.benefitsList} b6`}>
                        {[
                            "Không có quảng cáo",
                            "Mở khóa tất cả bài học",
                            "Ôn tập cá nhân hóa",
                            "Sử dụng không giới hạn AI chat",
                            "Tận hưởng trọn bộ đề ngại gì pass môn",
                        ].map((item, index) => (
                            <li key={index} className={styles.benefitItem}>
                                <CheckIcon className={styles.checkIcon} /> {item}
                            </li>
                        ))}
                    </ul>

                    {/* Nút hành động */}
                    <div className={styles.buttonContainer}>
                        <BtnBlue text="Mở khóa ngay" onClick={() => navigate("/upgrade")} />
                        <button className={styles.buttonSecondary} onClick={() => setIsOpen(false)}>
                            Không phải bây giờ
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default PremiumPopup;
