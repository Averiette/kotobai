import React, { useState } from "react";
import styles from "./StarIcon.module.css";

const StarIcon: React.FC = () => {
    const [marked, setMarked] = useState(false);

    const handleToggle = () => {
        setMarked(!marked);
    };

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={marked ? "yellow" : "none"} 
            stroke={marked ? "yellow" : "gray"} 
            strokeWidth="2"
            width="24px" 
            height="24px" 
            className={styles.star} 
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
        >
            <path d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z" />
        </svg>
    );
};

export default StarIcon;