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

// Chatbot API request function
const getChatbotResponse = async (message: string) => {
  try {
    const apiKey = "AIzaSyAlJhqGnxlbR_Nm0vMy0tS4foTd9MMLBU4"; // Replace this with your actual key
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `User message: "${message}"\n\nPlease respond in Japanese language only. Make sure to use natural Japanese expressions and appropriate levels of formality.`
          }]
        }]
      })
    });

    if (!response.ok) {
      console.error("API response error:", response.status, response.statusText);
      return "APIリクエストが失敗しました。";
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "応答を処理できません。";
  } catch (error) {
    console.error("Error with chatbot API:", error);
    return "エラーが発生しました。";
  }
};

const ChatBoxBlock: React.FC<ChatBoxBlockProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Xin chào! Hãy nhập tin nhắn của bạn..." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Show temporary "typing" message
    setMessages(prev => [...prev, { sender: "bot", text: "..." }]);

    // Get actual response from Gemini API
    const responseText = await getChatbotResponse(input);

    // Replace the typing message with actual response
    setMessages(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = { sender: "bot", text: responseText };
      return updated;
    });

    setIsLoading(false);
  };

  return (
    <div className={styles.chatBlockContainer}>
      {/* Header */}
      <div className={styles["header-action-block"]}>
        <button className={styles.backButtonBlock} onClick={onClose}>
          <BackIcon />
        </button>
        <p className={styles.s6}>Hỗ trợ trực tuyến</p>
        <button className={styles.closeButtonBlock} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      {/* Message container */}
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

      {/* Input field */}
      <div className={`${styles.chatInput} ${styles.b7}`}>
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading}
        />
        <button onClick={sendMessage} className={`${styles.s7} ${styles.sendButton}`} disabled={isLoading}>
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ChatBoxBlock;
