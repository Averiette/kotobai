import React, { useState } from "react";
import styles from "./DialogueBubble.module.css";
import { playSpeech } from "../../Sound/useSpeech";

// Import SVG icons
import { ReactComponent as SoundIcon } from "../../../assets/icons/sound.svg";
import { ReactComponent as TranslateIcon } from "../../../assets/icons/translate.svg";

interface DialogueBubbleProps {
  avatar: string;
  name: string;
  dialogue: string;
  translation: string;
  isRight?: boolean;
}

const DialogueBubble: React.FC<DialogueBubbleProps> = ({ avatar, name, dialogue, translation, isRight }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  // Hàm phát âm thanh
  const handlePlaySound = () => {
    playSpeech(name, dialogue); // Gọi hàm phát âm thanh với tên nhân vật và lời thoại
  };

  return (
    <div className={`${styles.bubbleContainer} ${isRight ? styles.right : ""}`}>
      {/* Avatar */}
      <img src={avatar} alt={name} className={styles.avatar} />

      {/* Nội dung hội thoại */}
      <div className={styles.bubbleContent}>
        <p className={styles.dialogueText}>{dialogue}</p>
        {showTranslation && <p className={styles.translationText}>{translation}</p>}
      </div>

      {/* Icon chức năng */}
      <div className={styles.iconContainer}>
        <SoundIcon className={styles.icon} onClick={handlePlaySound} /> {/* Gọi handlePlaySound khi bấm vào */}
        <TranslateIcon className={styles.icon} onClick={() => setShowTranslation(!showTranslation)} />
      </div>
    </div>
  );
};

export default DialogueBubble;
