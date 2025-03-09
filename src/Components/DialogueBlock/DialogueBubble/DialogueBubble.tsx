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

  const handlePlaySound = () => {
    playSpeech(name, dialogue); 
  };

  return (
    <div className={`${styles.bubbleContainer} ${isRight ? styles.right : ""}`}>
      <img src={avatar} alt={name} className={styles.avatar} />

      <div className={styles.bubbleBlock}>
        <p className={`${styles.speakerName} b7`}>{name}</p>
        <div className={styles.bubbleContent}>
          <p className={styles.dialogueText}>{dialogue}</p>
        </div>
        <p className={`${styles.translationText} ${showTranslation ? styles.showTranslation : ""} b7`}>{translation}</p>
      </div>

      <div className={styles.iconContainer}>
        <SoundIcon className={`${styles.soundIcon}`} onClick={handlePlaySound} />
        <TranslateIcon className={styles.icon} onClick={() => setShowTranslation(!showTranslation)} />
      </div>
    </div>
  );
};

export default DialogueBubble;
