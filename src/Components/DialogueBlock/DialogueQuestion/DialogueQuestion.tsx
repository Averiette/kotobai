import React, { useState } from "react";
import styles from "./DialogueQuestion.module.css";

interface DialogueQuestionProps {
  question: string;
  options: { id: number; text: string; pronunciation?: string }[];
  onSubmit: () => void;
}

const DialogueQuestion: React.FC<DialogueQuestionProps> = ({ question, options, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div className={styles.questionContainer}>
      <p className={styles.questionText}>{question}</p>
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${styles.optionButton} ${selectedOption === option.id ? styles.selected : ""}`}
            onClick={() => setSelectedOption(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        className={styles.nextButton}
        onClick={onSubmit}
        disabled={selectedOption === null}
      >
        Tiếp tục
      </button>
    </div>
  );
};

export default DialogueQuestion;
