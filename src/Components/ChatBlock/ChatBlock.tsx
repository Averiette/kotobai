import React, { useState, useEffect, useRef } from "react";
// Assets
import BotIcon from "@assets/Avatar/BotChat.png";
import AttackIcon from "@assets/Icons/Attack";
import MicIcon from "@assets/Icons/Mic";
// CSS
import styles from "./ChatBlock.module.css";

type Message = {
  sender: "user" | "bot";
  text: string;
};

// Gemini API integration
const getChatbotResponse = async (message: string) => {
  try {
    const apiKey = "AIzaSyAlJhqGnxlbR_Nm0vMy0tS4foTd9MMLBU4"; // Replace with your actual API key
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `User message: "${message}"\n\nPlease respond in Japanese language only. Make sure to use natural Japanese expressions and appropriate levels of formality.`,
                },
              ],
            },
          ],
        }),
      }
    );

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

const ChatBlock: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Xin chào! Hãy nhập tin nhắn của bạn..." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add temporary bot typing message
    setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "..." }]);

    // Fetch bot reply from Gemini
    const botReplyText = await getChatbotResponse(userMessage.text);

    // Replace "..." with actual bot reply
    setMessages((prevMessages) => {
      const updated = [...prevMessages];
      updated[updated.length - 1] = { sender: "bot", text: botReplyText };
      return updated;
    });

    setIsLoading(false);
  };

  // Auto-scroll to bottom
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
            <button className={styles.iconButton}>
              <AttackIcon />
            </button>

            <input
              className="b6"
              type="text"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={isLoading}
            />

            <button className={styles.iconButton}>
              <MicIcon />
            </button>

            <button onClick={sendMessage} className={`${styles.sendButton} b6`} disabled={isLoading}>
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBlock;
