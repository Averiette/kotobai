import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Dialogue.module.css"; 

// Import Components
import Navbar from "../../Components/Navbar/Navbar";
import BackButton from "../../Components/Button/BackButton/BackButton";
import DialogueBubble from "../../Components/DialogueBlock/DialogueBubble/DialogueBubble";

// Dữ liệu hội thoại
const dialogueData: Record<string, { title: string; content: { speaker: string; text: string; translation: string }[] }> = {
  "1": {
    title: "Lesson 1: Greetings",
    content: [
      { speaker: "Daniel", text: "はじめまして。ダニエルです。", translation: "Xin chào, tôi là Daniel." },
      { speaker: "Daniel", text: "オーストラリア人です。よろしくお願いします。", translation: "Tôi là người Úc. Rất vui được gặp bạn." },
      { speaker: "Park", text: "はじめまして。パクです。よろしくお願いします。", translation: "Xin chào, tôi là Bác. Rất vui được gặp bạn." }
    ]
  },
  "2": {
    title: "Lesson 2: Ordering Food",
    content: [
      { speaker: "A", text: "I'd like a burger, please.", translation: "Tôi muốn gọi một chiếc burger." },
      { speaker: "B", text: "Would you like fries with that?", translation: "Bạn có muốn thêm khoai tây chiên không?" },
      { speaker: "A", text: "Yes, please!", translation: "Vâng, làm ơn!" }
    ]
  }
};

const avatarMapping: Record<string, string> = {
  "Daniel": "https://example.com/daniel.png",
  "Park": "https://example.com/park.png",
  "A": "https://example.com/avatar_a.png",
  "B": "https://example.com/avatar_b.png"
};

const Dialogue: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(Number(id))) {
    return <h2>Không tìm thấy bài học phù hợp</h2>;
  }

  const lesson = dialogueData[id];

  if (!lesson) {
    return <h2>Bài học không tồn tại</h2>;
  }

  return (
    <div className="main-layout">
      <Navbar />
      <div className="heading">
        <BackButton to={`/lesson/${id}`} label="Quay lại bài học" />
        <div className="lesson-header">
          <h2 className="lesson-title">{lesson.title}</h2>
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
            isRight={dialogue.speaker === "Park"} // Giả sử nhân vật "Park" ở bên phải
          />
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
