import React from "react";
// Assets
import { ReactComponent as Logo } from "../../assets/logo-01.svg";
import { ReactComponent as FacebookSvg } from "../../assets/Icons/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/Icons/instagram.svg";
import { ReactComponent as MessengerSvg } from "../../assets/Icons/messenger.svg";
//CSS
import styles from "./Footer.module.css"; 

const Footer: React.FC = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerSection}>
                <Logo className={styles.iconSvg} />
                <p className={`${styles.footerDescription} b7`}>
                    Phương pháp học tiếng Nhật hiệu quả dành riêng cho sinh viên Trường Đại học FPT.
                </p>
                <div className={styles.footerIcons}>
                    <a href="https://www.facebook.com/profile.php?id=61571846685917" target="_blank" rel="noopener noreferrer">
                        <FacebookSvg className={styles.socialSvgFb} />
                    </a>
                    <a href="https://www.instagram.com/kotob.ai/" target="_blank" rel="noopener noreferrer">
                        <InstagramSvg className={styles.socialSvgIg} />
                    </a>
                    <a href="https://www.facebook.com/messages/t/526302420570674" target="_blank" rel="noopener noreferrer">
                        <MessengerSvg className={styles.socialSvgTt} />
                    </a>
                </div>
            </div>
            <div className={styles.footerBlock}>
                <div className={styles.footerLinks}>
                    <div>
                        <h6>Điều hướng</h6>
                        <ul>
                            <li className="b7"><a href="#">Trang chủ</a></li>
                            <li className="b7"><a href="#">Luyện tập</a></li>
                            <li className="b7"><a href="#">Bảng chữ cái</a></li>
                        </ul>
                    </div>

                    <div>
                        <h6>Hỗ trợ</h6>
                        <ul>
                            <li className="b7"><a href="#">Hỗ trợ khách hàng</a></li>
                            <li className="b7"><a href="#">Điều khoản & Điều kiện</a></li>
                            <li className="b7"><a href="#">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerFeedback}>
                    <h6>Gửi góp ý/phản hồi:</h6>
                    <div className={styles.feedbackForm}>
                        <input className="b7" type="text" placeholder="Nội dung..." />
                        <button className="b7">Gửi</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
