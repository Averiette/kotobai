import React, { useState } from "react";
import { ReactComponent as StarSvg } from "../../../assets/Icons/star.svg"; 
import styles from "./StarIcon.module.css"; 

const StarIcon: React.FC = () => {
    const [marked, setMarked] = useState(false);

    const handleToggle = () => {
        setMarked(!marked);
    };

    return (
        <StarSvg 
            className={`${styles.star} ${marked ? styles.filled : ""}`}
            onClick={handleToggle}
        />
    );
};

export default StarIcon;
