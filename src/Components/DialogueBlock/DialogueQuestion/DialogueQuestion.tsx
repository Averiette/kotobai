import React, { useState } from "react";
import styles from "./DialogueQuestion.module.css";

interface Option {
  id: number;
  text: string;
  pronunciation?: string;
}

interface DialogueQuestionProps {
  question: string;
  options: Option[];
  onSubmit: (selectedOption: Option | null) => void;
}

const DialogueQuestion: React.FC<DialogueQuestionProps> = ({ question, options, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <p className={styles.question}>{question}</p>
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${styles.optionButton} ${selectedOption?.id === option.id ? styles.selected : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.pronunciation && <span className={styles.pronunciation}>{option.pronunciation}</span>}
            <span className={styles.optionText}>{option.text}</span>
          </button>
        ))}
      </div>
      <button
        className={styles.submitButton}
        onClick={() => onSubmit(selectedOption)}
        disabled={!selectedOption}
      >
        TIẾP TỤC
      </button>
    </div>
  );
};

export default DialogueQuestion;
