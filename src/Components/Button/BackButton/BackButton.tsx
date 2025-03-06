import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../../assets/Icons/back-arrow.svg";
import styles from "./BackButton.module.css";

interface BackButtonProps {
  to: string;         
  label?: string;    
  className?: string; 
}

const BackButton: React.FC<BackButtonProps> = ({ to, label = "Quay lại", className = "" }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className={`${styles.backButton} b6 ${className}`}>
      <ArrowBackIcon className={styles.backIcon} />
      {label}
    </button>
  );
};

export default BackButton;
