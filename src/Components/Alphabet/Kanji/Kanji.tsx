import React from "react";
import styles from "./KanjiBlock.module.css";
import { kanjiList } from "../../../data/Alphabet/Kanji"; 

const KanjiBlock: React.FC = () => {
  return (
    <div className={styles.alphabetLayout}>
      <div className={styles.kanjiContainer}>
        <h3 className={styles.kanjiTitle}>Một số chữ Kanji cơ bản</h3>
        <div className={styles.kanjiGrid}>
          {kanjiList.map((kanji) => (
            <div key={kanji.id} className={styles.kanjiBox}>
              <span className={styles.kanjiChar}>{kanji.char}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanjiBlock;
