import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "../../assets/logo-01.svg";
import { ReactComponent as FacebookSvg } from "../../assets/Icons/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/Icons/instagram.svg";
import { ReactComponent as MessengerSvg } from "../../assets/Icons/messenger.svg";


const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <Logo className="icon-svg" />
                <p className="footer-description b7">
                    Phương pháp học tiếng Nhật hiệu quả dành riêng<br /> cho sinh viên Trường Đại học FPT.
                </p>
                <div className="footer-icons">
                <a href="https://www.facebook.com/profile.php?id=61571846685917" target="_blank" rel="noopener noreferrer">
                    <FacebookSvg className="social-svg-fb" />
                </a>
                <a href="https://www.instagram.com/kotob.ai/" target="_blank" rel="noopener noreferrer">
                    <InstagramSvg className="social-svg-ig" />
                </a>
                <a href="https://www.facebook.com/messages/t/526302420570674" target="_blank" rel="noopener noreferrer">
                    <MessengerSvg className="social-svg-tt" />
                </a>

                </div>
            </div>

            <div className="footer-links">
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
        
        <div className="footer-feedback">
            <h6>Gửi góp ý/phản hồi:</h6>
            <div className="feedback-form">
            <input className="b7" type="text" placeholder="Nội dung..." />
            <button className="b7">Gửi</button>
            </div>
        </div>
    </footer>
);
};

export default Footer;
