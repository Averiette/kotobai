import React from "react";
import { useNavigate } from "react-router-dom";
// Assets
import ArrowCircle from "@assets/Icons/ArrowCircle";
import ArrowRightBorder from "@assets/Icons/ArrowRightBorder";
import CloseIcon from "@assets/Icons/Close";
import Favicon from "@assets/Icons/Favicon";
import HomeIcon from "@assets/Icons/Home";
import MessageIcon from "@assets/Icons/Message";
import BotchatImg from "@assets/Avatar/BotChat.png";
//CSS
import styles from "./ChatBox.module.css";

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
        <button className={`${styles.chatButton} ${styles.s7}`} onClick={onOpenChatBlock}>
          Chat ngay bây giờ <ArrowCircle className={styles.arrowCircle} />
        </button>
      </div>

      <div className={styles.faqList}>
        <button className={`${styles.faqItem} ${styles.b7}`} onClick={() => navigate("/practice")}>
          Đề ôn luyện <ArrowRightBorder className={styles.arrowBorder} />
        </button>
        <button 
          className={`${styles.faqItem} ${styles.b7}`} 
          onClick={() => window.open("https://www.facebook.com/profile.php?id=61571846685917", "_blank", "noopener,noreferrer")}>
          Theo dõi nhận mã ưu đãi khủng <ArrowRightBorder className={styles.arrowBorder} />
        </button>
        <button className={`${styles.faqItem} ${styles.b7}`} onClick={() => navigate("/community")}>
          Tham gia cộng đồng ngay <ArrowRightBorder className={styles.arrowBorder} />
        </button>
      </div>

      <div className={styles.footer}>
        <button className={`${styles.footerItem} ${styles.naviButton} ${styles.b7}`}>
          <HomeIcon className={styles.footerIcon} /> Điều hướng
        </button>
        <button className={`${styles.footerItem} ${styles.messButton} ${styles.b7}`} onClick={onOpenChatBlock}>
          <MessageIcon className={styles.footerIcon} /> Trò chuyện
        </button>
      </div>
    </div>
  );
};

export default ChatBoxOpen;
