import React from "react";
import styles from "./ChatBox.module.css";
import { ReactComponent as MessageIcon } from "@icons/message.svg";

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
