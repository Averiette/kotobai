import React, { useState } from "react";
import styles from "./ChatBox.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as BackIcon } from "../../assets/Icons/back-arrow.svg";
import BotIcon from "../../assets/Avatar/BotChat.png";

interface ChatBoxBlockProps {
  onClose: () => void; // Quay về ChatBoxOpen
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBoxBlock: React.FC<ChatBoxBlockProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Xin chào! Hãy nhập tin nhắn của bạn..." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Đang phản hồi..." }
      ]);
    }, 1000);
  };

  return (
    <div className={styles.chatBlockContainer}>
      {/* Header */}
      <div className={styles["header-action-block"]}>
        <button className={styles.backButtonBlock} onClick={onClose}>
          <BackIcon />
        </button>
        <p className="s6">Hỗ trợ trực tuyến</p>
        <button className={styles.closeButtonBlock} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      {/* Khung tin nhắn */}
      <div className={styles.chatMessages}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
            {msg.sender === "bot" && <img src={BotIcon} alt="Bot" className={styles.botIcon} />}
            <div className={msg.sender === "user" ? styles.userMessageText : styles.botMessageText}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Ô nhập tin nhắn */}
      <div className={`${styles.chatInput} b7`}>
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className={`s7 ${styles.sendButton}`}>
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ChatBoxBlock;
