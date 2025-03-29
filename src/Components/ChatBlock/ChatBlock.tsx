import React, { useState, useEffect, useRef } from "react";
// Assets
import BotIcon from "@assets/Avatar/BotChat.png";
import AttackIcon from "@assets/Icons/Attack";
import MicIcon from "@assets/Icons/Mic";
//CSS
import styles from "./ChatBlock.module.css";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatBlock: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Xin chào! Hãy nhập tin nhắn của bạn..." }
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
  
    const newMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages: Message[]) => [...prevMessages, newMessage]);
    setInput("");
  
    setTimeout(() => {
      const botReply: Message = { sender: "bot", text: "Đang phản hồi..." };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };
  

  // Auto-scroll khi có tin nhắn mới
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={styles.background}>
      <div className={styles.mainLayout}>
        <div className={styles.chatBlockContainer} ref={chatContainerRef}>
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
          <div className={styles.chatInput}>
            {/* Icon đính kèm */}
            <button className={styles.iconButton}>
              <AttackIcon />
            </button>

            {/* Ô nhập tin nhắn */}
            <input
              className="b6"
              type="text"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            {/* Icon ghi âm */}
            <button className={styles.iconButton}>
              <MicIcon />
            </button>

            {/* Nút gửi tin nhắn */}
            <button onClick={sendMessage} className={`${styles.sendButton} b6`}>
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBlock;