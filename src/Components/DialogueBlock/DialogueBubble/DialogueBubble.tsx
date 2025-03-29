import React, { useState, useEffect, useRef } from "react";
// Components
import { playSpeech, playAudio } from "@Components/Sound/useSpeech";
// Assets
import SoundIcon from "@assets/Icons/Sound";
import TranslateIcon from "@assets/Icons/Translate";
//CSS
import styles from "./DialogueBubble.module.css";

interface DialogueBubbleProps {
  avatar: string;
  name: string;
  dialogue: string;
  translation: string;
  isRight?: boolean;
  isActive?: boolean;
  audio?: string;
}

const DialogueBubble: React.FC<DialogueBubbleProps> = ({
  avatar,
  name,
  dialogue,
  translation,
  isRight,
  isActive,
  audio,
}) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const playedRef = useRef(new Set<string>());
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  useEffect(() => {
    const key = `${name}-${dialogue}`;
    if (!playedRef.current.has(key)) {
      if (audio) {
        playAudio(
          audio,
          () => setIsSoundPlaying(true),
          () => setIsSoundPlaying(false)
        );
      } else {
        playSpeech(
          name,
          dialogue,
          () => setIsSoundPlaying(true),
          () => setIsSoundPlaying(false)
        );
      }
      playedRef.current.add(key);
    }
  }, [name, dialogue, audio]);

  useEffect(() => {
    if (bubbleRef.current) {
      const { bottom } = bubbleRef.current.getBoundingClientRect();
      if (window.innerHeight - bottom < 300) {
        bubbleRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [dialogue]);

  const handlePlaySound = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (audio) {
      playAudio(
        audio,
        () => setIsSoundPlaying(true),
        () => setIsSoundPlaying(false)
      );
    } else {
      playSpeech(
        name,
        dialogue,
        () => setIsSoundPlaying(true),
        () => setIsSoundPlaying(false)
      );
    }
  };

  return (
    <div
      ref={bubbleRef}
      className={`${styles.bubbleContainer} ${isRight ? styles.right : ""}`}
    >
      <img src={avatar} alt={name} className={styles.avatar} />

      <div className={styles.bubbleBlock}>
        <p className={`${styles.speakerName} b7`}>{name}</p>
        <div
          className={`${styles.bubbleContent} ${
            isActive ? styles.activeBubble : ""
          }`}
        >
          <p className={styles.dialogueText}>{dialogue}</p>
        </div>
        <p
          className={`${styles.translationText} ${
            showTranslation ? styles.showTranslation : ""
          } b7`}
        >
          {translation}
        </p>
      </div>

      <div className={styles.iconContainer}>
        <button className={styles.iconButton} onClick={handlePlaySound}>
          <SoundIcon
            className={`${styles.soundIcon} ${
              isSoundPlaying ? styles.soundIconActive : ""
            }`}
          />
        </button>
        <button
          className={styles.iconButton}
          onClick={(event) => {
            event.stopPropagation();
            setShowTranslation(!showTranslation);
          }}
        >
          <TranslateIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default DialogueBubble;