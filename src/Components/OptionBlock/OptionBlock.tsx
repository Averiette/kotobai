import React from "react";
import styles from "./OptionBlock.module.css";

interface Choice {
  text: string;
  correct: boolean;
}

interface OptionsBlockProps {
  questionText: string;
  choices: Choice[];
  selectedAnswer: string | null;
  isWrong: boolean;
  canContinue: boolean;
  handleAnswerClick: (choice: Choice) => void;
  handleNext: () => void;
}

const OptionsBlock: React.FC<OptionsBlockProps> = ({
  questionText,
  choices,
  selectedAnswer,
  isWrong,
  canContinue,
  handleAnswerClick,
  handleNext,
}) => {
  return (
    <div className={styles.fixedBottomContainer}>
      <div className={styles.questionContainer}>
        <p className={`${styles.questionText} s6`}>{questionText}</p>

        <div className={`${styles.choices} b7`}>
          {choices.map((choice, index) => (
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

        {isWrong && (
          <div className={styles.errorMessageContainer}>
            <p className={`${styles.errorText} b7`}>
              ❌ Chưa đúng, bạn hãy trả lời lại nhé!
            </p>
          </div>
        )}
      </div>

      <button
        className={`${styles.nextButton} b7`}
        onClick={handleNext}
        disabled={!canContinue}
      >
        Tiếp tục
      </button>
    </div>
  );
};

export default OptionsBlock;
