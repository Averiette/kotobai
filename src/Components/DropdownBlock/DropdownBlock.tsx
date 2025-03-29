import React, { useState, useCallback } from 'react';
// Assets
import DropdownIcon from '@assets/Icons/Dropdown'; 
//CSS
import styles from './DropdownBlock.module.css';

interface DropdownBlockProps {
  title: string;
  content: React.ReactNode;
}

const DropdownBlock: React.FC<DropdownBlockProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={`${styles["dropdown-block"]} ${isOpen ? styles.open : ""}`}>
      <div 
        className={styles["dropdown-header"]} 
        onClick={toggleDropdown} 
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <DropdownIcon className={styles["dropdown-icon"]} />
      </div>
      {isOpen && <div className={styles["dropdown-content"]}>{content}</div>}
    </div>
  );
};

export default DropdownBlock;
