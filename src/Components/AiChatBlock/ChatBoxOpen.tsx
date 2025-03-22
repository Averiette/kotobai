import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChatBox.module.css";
import { ReactComponent as ArrowCircle } from "@icons/arrow-right-circle.svg";
import { ReactComponent as ArrowRightBorder } from "@icons/arrow-right-border.svg";
import { ReactComponent as CloseIcon } from "@icons/close.svg";
import { ReactComponent as Favicon } from "@icons/favicon.svg";
import { ReactComponent as HomeIcon } from "@icons/home.svg";
import { ReactComponent as MessageIcon } from "@icons/message.svg";
import BotchatImg from "@assets/Avatar/BotChat.png";

interface ChatBoxOpenProps {
  onClose: () => void;
  onOpenChatBlock: () => void;
}

const ChatBoxOpen: React.FC<ChatBoxOpenProps> = ({ onClose, onOpenChatBlock }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <div className={styles["header-action"]}>
          <Favicon className={styles.favicon} />
          <button className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.heading}>
          <p>Xin chào <br /> mừng bạn</p>
        </div>
      </div>

      <div className={styles.supportBox}>
        <div className={styles.supportUpper}>
          <div className={styles.supportAvatar}>
            <img src={BotchatImg} alt="KotobA.I" />
          </div>
          <div className={styles.supportContent}>
            <strong>Support</strong>
            <p>Xin chào, mình có thể giúp gì cho bạn không?</p>
          </div>
        </div>
        <button className={`${styles.chatButton} s7`} onClick={onOpenChatBlock}>
          Chat ngay bây giờ <ArrowCircle className={styles.arrowCircle} />
        </button>
      </div>

      <div className={styles.faqList}>
        <button className={`${styles.faqItem} b7`} onClick={() => navigate("/practice")}>
          Đề ôn luyện <ArrowRightBorder className={styles.arrowBorder} />
        </button>
        <button 
          className={`${styles.faqItem} b7`} 
          onClick={() => window.open("https://www.facebook.com/profile.php?id=61571846685917", "_blank")}>
          Theo dõi nhận mã ưu đãi khủng <ArrowRightBorder className={styles.arrowBorder} />
        </button>
        <button className={`${styles.faqItem} b7`} onClick={() => navigate("/community")}>
          Tham gia cộng đồng ngay <ArrowRightBorder className={styles.arrowBorder} />
        </button>
      </div>

      <div className={styles.footer}>
        <button className={`${styles.footerItem} ${styles.naviButton} b7`}>
          <HomeIcon className={styles.footerIcon} /> Điều hướng
        </button>
        <button className={`${styles.footerItem} ${styles.messButton} b7`} onClick={onOpenChatBlock}>
          <MessageIcon className={styles.footerIcon} /> Trò chuyện
        </button>
      </div>
    </div>
  );
};

export default ChatBoxOpen;
