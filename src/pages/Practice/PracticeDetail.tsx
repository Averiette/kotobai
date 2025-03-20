import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import OptionsBlock from "../../components/OptionBlock/OptionBlock";
import { practiceInfo } from "../../data/Practice/PracticeData";
import { PracticeQnA1 } from "../../data/Practice/PracticeQnA1";
import { PracticeQnA2 } from "../../data/Practice/PracticeQnA2";
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
};

const PracticeDetail: React.FC = () => {
  const { id } = useParams();

  // Chuẩn hóa id, hỗ trợ cả dạng "practice1" và "practice:id=1"
  const lessonIdMatch = id?.match(/\d+/); // Tìm số trong id
  const lessonId = lessonIdMatch ? Number(lessonIdMatch[0]) : NaN;

  // Kiểm tra id hợp lệ
  if (isNaN(lessonId) || !(lessonId in practiceQnAList)) {
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

  return (
    <div className="main-layout">
      <Navbar />
      <div className={styles["practice-detail-container"]}>
        {isFinished ? (
          <h2 className={styles["completion-message"]}>
            Bạn đã hoàn thành bài luyện tập!
          </h2>
        ) : (
          <>
            <p className={`${styles["question-title"]} s4`}>
              {questions[currentQuestionIndex]?.text || "Câu hỏi không tồn tại"}
            </p>
            <OptionsBlock
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
