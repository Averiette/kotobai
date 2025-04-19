import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@Components/Navbar/Navbar";
import OptionsBlock from "@Components/OptionBlock/OptionBlock";
import BackButton from "@Components/Button/BackButton/BackButton";
import { PracticeQnA1 } from "@data/Practice/PracticeQnA1";
import { PracticeQnA2 } from "@data/Practice/PracticeQnA2";
import { PracticeQnA3 } from "@data/Practice/PracticeQnA_3";
import { PracticeQnA4 } from "@data/Practice/PracticeQnA_4";
import { PracticeQnA5 } from "@data/Practice/PracticeQnA_5";
import { PracticeQnA6 } from "@data/Practice/PracticeQnA_6";
import { PracticeQnA7 } from "@data/Practice/PracticeQnA_7";
import { PracticeQnA8 } from "@data/Practice/PracticeQnA_8";
import { PracticeQnA9 } from "@data/Practice/PracticeQnA_9";
import { PracticeQnA10 } from "@data/Practice/PracticeQnA_10";
import { practiceData } from "@data/Practice/PracticeData"; 
import styles from "./PracticeDetail.module.css";

interface Choice {
  text: string;
  correct: boolean;
}

interface Question {
  text: string;
  choices: Choice[];
}

// Danh sách dữ liệu bài tập
const practiceQnAList: { [key: number]: Question[] } = {
  1: PracticeQnA1,
  2: PracticeQnA2,
  3: PracticeQnA3,
  4: PracticeQnA4,
  5: PracticeQnA5,
  6: PracticeQnA6,
  7: PracticeQnA7,
  8: PracticeQnA8,
  9: PracticeQnA9,
  10: PracticeQnA10,
};

const PracticeDetail: React.FC = () => {
  const { id } = useParams();

  // Chuẩn hóa id, hỗ trợ cả dạng "practice1" và "practice:id=1"
  const lessonIdMatch = id?.match(/\d+/); // Tìm số trong id
  const lessonId = lessonIdMatch ? Number(lessonIdMatch[0]) : NaN;

  // Lấy bài luyện tập từ practiceData
  const lesson = practiceData.find((item) => item.id === lessonId);

  // Kiểm tra id hợp lệ
  if (isNaN(lessonId) || !(lessonId in practiceQnAList) || !lesson) {
    return <h2 className={styles.error}>Bài luyện tập không tồn tại!</h2>;
  }

  const questions: Question[] = practiceQnAList[lessonId];

  // State quản lý trạng thái bài tập
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isWrong, setIsWrong] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Reset trạng thái khi thay đổi bài luyện tập
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsWrong(false);
    setCanContinue(false);
    setIsFinished(false);
  }, [lessonId]);

  // Reset trạng thái khi chuyển câu hỏi mới
  useEffect(() => {
    setSelectedAnswer(null);
    setIsWrong(false);
    setCanContinue(false);
  }, [currentQuestionIndex]);

  const handleAnswerClick = (choice: Choice) => {
    setSelectedAnswer(choice.text);
    setIsWrong(!choice.correct);
    setCanContinue(choice.correct);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Tính phần trăm tiến độ
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="main-layout">
      <div className="lesson-container">
      <Navbar />
      <div className="heading">
        <BackButton to={`/lesson/${id}`} label="Quay lại" />
        <div className="lesson-header">
          <h2 className={styles["lesson-title"]}>
            <span>{lesson.subtitle}</span> {lesson.title}
          </h2>
        </div>
        </div>
        {/* Progress Bar */}
      <div className={styles["progress-block"]}>
        <div className={styles["progress-container"]}>
          <div className={styles["progress-bar"]} style={{ width: `${progress}%` }}></div>
        </div>
        <p className={`${styles["progress-text"]} b7`}>
          {currentQuestionIndex + 1}/{questions.length} câu hỏi
        </p>
      </div>
      </div>
      

      <div className={styles["practice-detail-container"]}>
        {isFinished ? (
          <h2 className={styles["completion-message"]}>
            Bạn Đã xong bài luyện tập!
          </h2>
        ) : (
          <>
            <p className={`${styles["question-title"]} s4`}>
              {questions[currentQuestionIndex]?.text || "Câu hỏi không tồn tại"}
            </p>
            <OptionsBlock
              questionText={questions[currentQuestionIndex]?.text || "Câu hỏi không tồn tại"}
              choices={questions[currentQuestionIndex]?.choices || []}
              selectedAnswer={selectedAnswer}
              isWrong={isWrong}
              canContinue={canContinue}
              handleAnswerClick={handleAnswerClick}
              handleNext={handleNext}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PracticeDetail;
