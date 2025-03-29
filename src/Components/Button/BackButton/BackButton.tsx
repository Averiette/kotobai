import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@assets/Icons/BackArrow";
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
