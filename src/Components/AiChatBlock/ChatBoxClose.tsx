import React from "react";
// Assets
import MessageIcon from "@assets/icons/Message";
//CSS
import styles from "./ChatBox.module.css";
interface ChatBoxCloseProps {
  onOpen: () => void;
}

const ChatBoxClose: React.FC<ChatBoxCloseProps> = ({ onOpen }) => {
    return (
      <button className={`${styles.chatBoxClose} s6`} onClick={onOpen}>
        Để lại lời nhắn
        <MessageIcon className={styles.messageIcon} /> 
      </button>
    );
};

export default ChatBoxClose;
