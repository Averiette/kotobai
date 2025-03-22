import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Dialogue.module.css";

// Import Components
import Navbar from "../../Components/Navbar/Navbar";
import BackButton from "../../Components/Button/BackButton/BackButton";
import DialogueBubble from "../../Components/DialogueBlock/DialogueBubble/DialogueBubble";

// Import dữ liệu hội thoại
import dialogue1 from "../../data/DialogueData/Dialogue1";
import dialogue2 from "../../data/DialogueData/Dialogue2";
import { NameLesson } from "../../data/NameLesson";

// Import Avatar
import DanielAvatar from "../../assets/Avatar/Daniel.png";
import ParkAvatar from "../../assets/Avatar/Park.png";
import WanAvatar from "../../assets/Avatar/Wan.png";
import MaryAvatar from "../../assets/Avatar/Mary.png"
import NvaAvatar from "../../assets/Avatar/NVA.png";
import NvbAvatar from "../../assets/Avatar/NVB.png";

// Ánh xạ ID bài hội thoại
const dialogueData = { "1": dialogue1, "2": dialogue2 };

// Mapping tên nhân vật với avatar
const avatarMapping = {
  Daniel: DanielAvatar,
  Park: ParkAvatar,
  Wan: WanAvatar,
  Mary: MaryAvatar,
  店員A: NvaAvatar,
  店員B: NvbAvatar,
};

const getVoiceForLanguage = (lang) => {
  const voices = speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === lang) || null;
};

const speakText = (text, lang) => {
  if (lang === "ja-JP") {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    const voice = getVoiceForLanguage(lang);
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }
};

const detectLanguage = (text) => {
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

  // Lấy tiêu đề từ NameLesson.ts
  const lessonTitle =
    NameLesson.find((lesson) => lesson.id.toString() === id)?.name ||
    "Bài học không tồn tại";

  // State
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
      // Nếu không có câu hỏi, tự động hiển thị câu tiếp theo sau 3 giây
      const timer = setTimeout(() => {
        if (visibleCount < lesson.content.length) {
          setVisibleCount((prev) => prev + 1);
        } else {
          // ✅ Điều hướng đến /dialogue/done và truyền lessonId
          navigate("/dialogue/done", { state: { lessonId: id } });
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, currentDialogue, navigate, lesson.content.length, id]); // Thêm `id` vào dependency array

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

  // Xử lý chọn đáp án
  const handleAnswerClick = (choice: { text: string; correct: boolean }) => {
    setSelectedAnswer(choice.text);
    if (detectLanguage(choice.text) === "ja-JP") {
      speakText(choice.text, "ja-JP"); // Phát âm thanh chỉ nếu là tiếng Nhật
    }
    if (choice.correct) {
      setIsWrong(false);
      setCanContinue(true);
    } else {
      setIsWrong(true);
      setCanContinue(false);
    }
  };

  // Xử lý khi bấm "Tiếp tục"
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

      {/* Hiển thị hội thoại */}
      <div ref={dialogueContainerRef} className={styles.dialogueContainer}>
        {lesson.content?.slice(0, visibleCount).map((dialogue, index) => (
          <DialogueBubble
            key={dialogue.id}
            avatar={avatarMapping[dialogue.speaker] || DefaultAvatar}
            name={dialogue.speaker}
            dialogue={dialogue.text}
            translation={dialogue.translation}
            isRight={dialogue.isRight}
            isActive={index === visibleCount - 1}
          />
        ))}
      </div>

      {/* Block cố định dưới màn hình */}
      {currentDialogue?.question && (
        <div className={styles.fixedBottomContainer}>
          <div className={styles.questionContainer}>
            <p className={`${styles.questionText} s6`}>
              {currentDialogue.question.text}
            </p>

            <div className={`${styles.choices} b7`}>
              {currentDialogue.question.choices.map((choice, index) => (
                <button
                  key={index}
                  className={`${styles.choiceButton} ${
                    selectedAnswer === choice.text
                      ? choice.correct
                        ? styles.correct
                        : styles.wrong
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(choice)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
            <div className={styles.errorMessageContainer}>
              {isWrong && (
                <p className={`${styles.errorText} b7`}>
                  ❌ Chưa đúng, bạn hãy trả lời lại nhé!
                </p>
              )}
            </div>
          </div>
          <button
            className={`${styles.nextButton} b7`}
            onClick={handleNext}
            disabled={!canContinue}
          >
            Tiếp tục
          </button>
        </div>
      )}
    </div>
  );
};

export default Dialogue;
