import React, { useState } from "react";
import ChatBoxOpen from "./ChatBoxOpen";
import ChatBoxClose from "./ChatBoxClose";
import ChatBoxBlock from "./ChatBoxBlock";
import styles from "./ChatBox.module.css";

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatBlockOpen, setIsChatBlockOpen] = useState(false);

  const handleCloseChatBlock = () => {
    setIsChatBlockOpen(false); 
  };

  return (
    <div className={styles.chatBoxContainer}>
      {isChatBlockOpen ? (
        <ChatBoxBlock onClose={handleCloseChatBlock} />
      ) : isOpen ? (
        <ChatBoxOpen
          onClose={() => setIsOpen(false)}
          onOpenChatBlock={() => setIsChatBlockOpen(true)}
        />
      ) : (
        <ChatBoxClose onOpen={() => setIsOpen(true)} />
      )}
    </div>
  );
};

export default ChatBox;
