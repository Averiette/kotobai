import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Components
import Navbar from "@Components/Navbar/Navbar";
import BackButton from "@Components/Button/BackButton/BackButton";
import DialogueBubble from "@Components/DialogueBlock/DialogueBubble/DialogueBubble";
// Assets
import DanielAvatar from "@assets/Avatar/Daniel.png";
import ParkAvatar from "@assets/Avatar/Park.png";
import WanAvatar from "@assets/Avatar/Wan.png";
import MaryAvatar from "@assets/Avatar/Mary.png"
import NvaAvatar from "@assets/Avatar/NVA.png";
import NvbAvatar from "@assets/Avatar/NVB.png";
import ManGlassAvatar from "@assets/Avatar/9.png";
import ManGreenAvatar from "@assets/Avatar/13.png";
import WomanGlassAvatar from "@assets/Avatar/10.png";
import WomanTie from "@assets/Avatar/Yamaguchi.png"

//Data
import dialogue1 from "@data/DialogueData/Dialogue1";
import dialogue2 from "@data/DialogueData/Dialogue2";
import dialogue3 from "@data/DialogueData/Dialogue3";
import dialogue4 from "@data/DialogueData/Dialogue4";
import dialogue5 from "@data/DialogueData/Dialogue5";
import dialogue6 from "@data/DialogueData/Dialogue6";
import dialogue7 from "@data/DialogueData/Dialogue7";
import dialogue8 from "@data/DialogueData/Dialogue8";
import dialogue9 from "@data/DialogueData/Dialogue9";
import dialogue10 from "@data/DialogueData/Dialogue10";
import { NameLesson } from "@data/NameLesson";
//CSS
import styles from "./Dialogue.module.css";

interface Choice {
  text: string;
  correct: boolean;
}

interface DialogueItem {
  id: number;
  speaker: string;
  text: string;
  translation: string;
  isRight: boolean;
  question?: {
    text: string;
    choices: Choice[];
  };
}

const dialogueData: Record<string, { content: DialogueItem[] }> = {
  "1": dialogue1,
  "2": dialogue2,
  "3": dialogue3,
  "4": dialogue4,
  "5": dialogue5,
  "6": dialogue6,
  "7": dialogue7,
  "8": dialogue8,
  "9": dialogue9,
  "10": dialogue10,
};

const avatarMapping: Record<string, string> = {
  Daniel: DanielAvatar,
  Park: ParkAvatar,
  Wan: WanAvatar,
  Mary: MaryAvatar,
  "店員A": NvaAvatar,
  "店員B": NvbAvatar,
  ミラー: DanielAvatar,
  佐藤: ParkAvatar,
  店の人: NvaAvatar,
  サントス: MaryAvatar,
  女の人: NvaAvatar,
  駅員: ManGlassAvatar,
  男の人: ManGreenAvatar,
  山田一郎: ManGlassAvatar,
  山田友子: WomanGlassAvatar,
  マリア・サントス: MaryAvatar,
  ジョゼ・サントス: ManGreenAvatar,
  木村: WomanTie,
  山田: ManGreenAvatar,
  カリナ: ParkAvatar,
  運転手: ManGlassAvatar

  
};

const getVoiceForLanguage = (lang: string) => {
  const voices = speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === lang) || null;
};

const speakText = (text: string, lang: string) => {
  if (lang === "ja-JP") {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    const voice = getVoiceForLanguage(lang);
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }
};

const detectLanguage = (text: string) => {
  return /[ぁ-んァ-ン一-龥]/.test(text) ? "ja-JP" : "vi-VN";
};

const Dialogue: React.FC = () => {
  const params = useParams<{ id?: string }>();
  const id = params.id || "";
  const dialogueContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  if (!id || !dialogueData[id]) {
    return <h2>Bài học không tồn tại</h2>;
  }

  const lesson = dialogueData[id];
  const lessonTitle = NameLesson.find((lesson) => lesson.id.toString() === id)?.name || "Bài học không tồn tại";

  const [visibleCount, setVisibleCount] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isWrong, setIsWrong] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    speechSynthesis.onvoiceschanged = () => {};
  }, []);

  const currentDialogue = lesson.content?.[visibleCount - 1] || null;

  useEffect(() => {
    if (!currentDialogue?.question) {
      const timer = setTimeout(() => {
        if (visibleCount < lesson.content.length) {
          setVisibleCount((prev) => prev + 1);
        } else {
          navigate("/dialogue/done", { state: { lessonId: id } });
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, currentDialogue, navigate, lesson.content.length, id]);

  useEffect(() => {
    if (dialogueContainerRef.current) {
      const container = dialogueContainerRef.current;
      const maxHeight = window.innerHeight * 0.45;
      if (container.scrollHeight > maxHeight) {
        container.style.maxHeight = `${maxHeight}px`;
        container.style.overflowY = "auto";
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [visibleCount, currentDialogue]);

  const handleAnswerClick = (choice: Choice) => {
    setSelectedAnswer(choice.text);
    if (detectLanguage(choice.text) === "ja-JP") {
      speakText(choice.text, "ja-JP");
    }
    if (choice.correct) {
      setIsWrong(false);
      setCanContinue(true);
    } else {
      setIsWrong(true);
      setCanContinue(false);
    }
  };

  const handleNext = () => {
    if (canContinue) {
      setVisibleCount((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsWrong(false);
      setCanContinue(false);
    }
  };

  return (
    <div className="main-layout">
      <div className="lesson-container">
        <Navbar />
        <div className="heading">
          <BackButton to={`/lesson/${id}`} label="Quay lại bài học" />
          <div className="lesson-header">
            <h2 className="lesson-title">{lessonTitle}</h2>
          </div>
        </div>
      </div>

      <div ref={dialogueContainerRef} className={styles.dialogueContainer}>
        {lesson.content?.slice(0, visibleCount).map((dialogue, index) => (
          <DialogueBubble
            key={dialogue.id}
            avatar={avatarMapping[dialogue.speaker] || ""}
            name={dialogue.speaker}
            dialogue={dialogue.text}
            translation={dialogue.translation}
            isRight={dialogue.isRight}
            isActive={index === visibleCount - 1}
          />
        ))}
      </div>

      {currentDialogue?.question && (
        <div className={styles.fixedBottomContainer}>
          <div className={styles.questionContainer}>
            <p className={`${styles.questionText} s6`}>{currentDialogue.question.text}</p>
            <div className={`${styles.choices} b7`}>
              {currentDialogue.question.choices.map((choice, index) => (
                <button
                  key={index}
                  className={`${styles.choiceButton} ${selectedAnswer === choice.text ? (choice.correct ? styles.correct : styles.wrong) : ""}`}
                  onClick={() => handleAnswerClick(choice)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
            {isWrong && <p className={`${styles.errorText} b7`}>❌ Chưa đúng, bạn hãy trả lời lại nhé!</p>}
          </div>
          <button className={`${styles.nextButton} b7`} onClick={handleNext} disabled={!canContinue}>
            Tiếp tục
          </button>
        </div>
      )}
    </div>
  );
};

export default Dialogue;