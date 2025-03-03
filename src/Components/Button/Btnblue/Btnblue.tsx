import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnBlue.module.css";

interface BtnBlueProps {
  text: string;
  to?: string; 
  onClick?: () => void;
  className?: string; 
}

const BtnBlue: React.FC<BtnBlueProps> = ({ text, to, onClick, className }) => {
  if (to) {
    return (
      <Link to={to} className={`${styles.btnBlue} ${className || ""}`}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.btnBlue} ${className || ""}`}>
      {text}
    </button>
  );
};

export default BtnBlue;
