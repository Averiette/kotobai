import React, { useState } from "react";
// Assets
import CloseIcon from "@assets/Icons/Close";
import BackIcon from "@assets/Icons/BackArrow";
import BotIcon from "@assets/Avatar/BotChat.png";
// CSS
import styles from "./ChatBox.module.css";

interface ChatBoxBlockProps {
  onClose: () => void; 
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
      setMessages((prevMessages) => [
        ...prevMessages,
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
        <p className={styles.s6}>Hỗ trợ trực tuyến</p> {/* Đảm bảo styles.s6 tồn tại */}
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
      <div className={`${styles.chatInput} ${styles.b7}`}>
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className={`${styles.s7} ${styles.sendButton}`}>
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ChatBoxBlock;
