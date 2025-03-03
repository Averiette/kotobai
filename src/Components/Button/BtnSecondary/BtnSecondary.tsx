import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnSecondary.module.css";

interface BtnSecondaryProps {
  text: string;
  to?: string; 
  onClick?: () => void;
  className?: string; 
}

const BtnSecondary: React.FC<BtnSecondaryProps> = ({ text, to, onClick, className }) => {
  if (to) {
    return (
      <Link to={to} className={`${styles.btnSecondary} ${className || ""}`}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.btnSecondary} ${className || ""}`}>
      {text}
    </button>
  );
};

export default BtnSecondary;
