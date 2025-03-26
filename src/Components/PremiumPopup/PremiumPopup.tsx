import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
// Components
import BtnBlue from '@Components/Button/Btnblue/Btnblue'
// Assets
import CheckIcon from "@assets/Icons/Check";
import CloseIcon from "@assets/Icons/Close";
//CSS
import styles from "./PremiumPopup.module.css"; 

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
                    <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                        <CloseIcon className={styles.closeIcon} />
                    </button>

                    <div className={styles.textCenter}>
                        <p className={`${styles.discountBadge} h7`}>GIẢM GIÁ 20%</p>
                        <h4 className={styles.title}>
                            Học <span className={styles.highlightBlue}>nhanh hơn</span> với{" "}
                            <span className={styles.highlightDarkBlue}>Premium</span>
                        </h4>
                    </div>

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

                    <div className={styles.buttonContainer}>
                        <BtnBlue className="b6" text="Mở khóa ngay" onClick={() => navigate("/upgrade")} />
                        <button className={`${styles.buttonSecondary} b6`} onClick={() => setIsOpen(false)}>
                            Không phải bây giờ
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default PremiumPopup;
