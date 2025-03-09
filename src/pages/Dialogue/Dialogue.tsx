import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Dialogue.module.css"; 

// Import Components
import Navbar from "../../Components/Navbar/Navbar";
import BackButton from "../../Components/Button/BackButton/BackButton";
import DialogueBubble from "../../Components/DialogueBlock/DialogueBubble/DialogueBubble";

// Import dữ liệu hội thoại
import dialogue1 from "../../data/DialogueData/Dialogue1";
import dialogue2 from "../../data/DialogueData/Dialogue2";

// Import Img
import DanielAvatar from "../../assets/Avatar/Daniel.png";
import ParkAvatar from "../../assets/Avatar/Park.png";
import WanAvatar from "../../assets/Avatar/Wan.png";
import DefaultAvatar from "../../assets/Avatar/Daniel.png";


const dialogueData: Record<string, { title: string; content: { speaker: string; text: string; translation: string }[] }> = {
  "1": dialogue1,
  "2": dialogue2
};

const avatarMapping: Record<string, string> = {
  "Daniel": DanielAvatar,
  "Park": ParkAvatar,
  "Wan": WanAvatar,
  "A": DefaultAvatar,
  "B": DefaultAvatar
};


const Dialogue: React.FC = () => {
  const params = useParams<{ id?: string }>();
  const id = params.id || "";

  if (!id || !dialogueData[id]) {
    return <h2>Bài học không tồn tại</h2>;
  }

  const lesson = dialogueData[id];

  return (
    <div className="main-layout">
      <div className="lesson-container">
        <Navbar />
        <div className="heading">
          <BackButton to={`/lesson/${id}`} label="Quay lại bài học" />
          <div className="lesson-header">
            <h2 className="lesson-title">{lesson.title}</h2>
          </div>
        </div>
      </div>
      <div className={styles.dialogueContainer}>
        {lesson.content.map((dialogue, index) => (
         <DialogueBubble
          key={index}
          avatar={avatarMapping[dialogue.speaker] || "https://example.com/default-avatar.png"}
          name={dialogue.speaker}
          dialogue={dialogue.text}
          translation={dialogue.translation}
          isRight={dialogue.isRight}
        />       
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
