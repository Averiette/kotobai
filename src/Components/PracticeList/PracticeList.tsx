import React from "react";
import { useNavigate } from "react-router-dom";
// Assets
import lesson1Img from "@assets/Practice List/260px x 230px_L1.png";
import lesson2Img from "@assets/Practice List/260px x 230px_L2.png";
import lesson3Img from "@assets/Practice List/260px x 230px_L3.png";
import lesson4Img from "@assets/Practice List/260px x 230px_L4.png";
import lesson5Img from "@assets/Practice List/260px x 230px_L5.png";
import lesson6Img from "@assets/Practice List/260px x 230px_L6.png";
import lesson7Img from "@assets/Practice List/260px x 230px_L7.png";
import lesson8Img from "@assets/Practice List/260px x 230px_L8.png";
import lesson9Img from "@assets/Practice List/260px x 230px_L9.png";
import lesson10Img from "@assets/Practice List/260px x 230px_L10.png";
import DataAvaIcon from "@assets/Icons/data-avatar.svg";
import ImgActive from "@assets/Icons/Arrow";
import ImgInactive from "@assets/Icons/Lock";
//CSS
import "./PracticeList.css";

interface PracticeInfo {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  note: string;
  category: "Đã xong" | "Đang làm" | "Đang khóa" | "Nâng cấp để mở";
  image: string;
  progress: number;
}

const categoryClassMap = {
  "Đã xong": "completed",
  "Đang làm": "doing",
  "Đang khóa": "locked",
  "Nâng cấp để mở": "upgrade",
};

const practiceInfo: PracticeInfo[] = [
  { id: 1, title: "はじめまして", subtitle: "Ôn tập bài 1", desc: "Rất vui được gặp bạn", note: "Bài tập tổng hợp", category: "Đang làm", image: lesson1Img, progress: 0 },
  { id: 2, title: "買い物・食事", subtitle: "Ôn tập bài 2", desc: "Mua sắm・Bữa ăn", note: "Bài tập tổng hợp", category: "Đang làm", image: lesson2Img, progress: 0 },
  { id: 3, title: "スケジュール", subtitle: "Ôn tập bài 3", desc: "Lịch trình", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson3Img, progress: 0 },
  { id: 4, title: "私の国・町", subtitle: "Ôn tập bài 4", desc: "Đất nước・Thị trấn của tôi", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson4Img, progress: 0 },
  { id: 5, title: "休みの日", subtitle: "Ôn tập bài 5", desc: "Ngày nghỉ", note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson5Img, progress: 0 },
  { id: 6, title: "一緒に!", subtitle: "Ôn tập bài 6", desc: "Cùng nhau", note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson6Img, progress: 0 },
  { id: 7, title: "友達の家で", subtitle: "Ôn tập bài 7", desc: "Ở nhà một người bạn", note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson7Img, progress: 0 },
  { id: 8, title: "大切な人", subtitle: "Ôn tập bài 8", desc: "Người quan trọng", note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson8Img, progress: 0 },
  { id: 9, title: "好きなこと", subtitle: "Ôn tập bài 9", desc: "Những gì tôi thích", note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson9Img, progress: 0 },
  { id: 10, title: "バスツアー", subtitle: "Ôn tập bài 10", desc: "Chuyến tham quan bằng xe buýt", note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson10Img, progress: 0 },
];

const getRandomCount = () => Math.floor(Math.random() * 50) + 1;

const PracticeList: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number, category: string) => {
    if (category !== "Đang khóa") {
      navigate(`/practice/${id}`);
    }
  };

  return (
    <div className="practice">
      <h3 className="title">LUYỆN TẬP BÀI KHÓA</h3>
      <div className="practice-container">
        {practiceInfo.map((lesson) => (
          <div 
            key={lesson.id} 
            className={`practice-block ${categoryClassMap[lesson.category]}`}
            onClick={() => handleNavigate(lesson.id, lesson.category)}
            style={{ cursor: lesson.category !== "Đang khóa" ? "pointer" : "default" }}
          >
            {/* Phần trên: Avatar và trạng thái bài học */}
            <div className="practice-block-upper">
              <div className="avatar-frame">
                <img src={DataAvaIcon} alt="avatar" className="data-avatar" />
                <img src={DataAvaIcon} alt="avatar" className="data-avatar" />
                <div className="data-avatar-wrapper">
                  <img src={DataAvaIcon} alt="avatar" className="data-avatar" />
                  <div className="data-avatar-overlay"></div>
                  <span className="avatar-count s8">+{getRandomCount()}</span>
                </div>
              </div>

              <div className={`direction ${categoryClassMap[lesson.category]}`}>
                <span className="practice-category s8">{lesson.category}</span>
                <div className="practice-item-icon">
                  {lesson.category === "Đã xong" || lesson.category === "Đang làm" ? (
                    <ImgActive className="icon-svg" />
                  ) : (
                    <ImgInactive className="icon-svg" />
                  )}
                </div>
              </div>
            </div>

            {/* Phần dưới: Nội dung bài học */}
            <div className="practice-block-bottom">
              <div className="practice-left">
                <div className="practice-contents">
                  <p className="practice-subtitle s4">{lesson.subtitle}</p>
                  <h2 className="practice-title">{lesson.title}</h2>
                  <p className="practice-desc b7">{lesson.desc}</p>
                </div>
                <span className="practice-note b7">{lesson.note}</span>
              </div>

              <div className="practice-right">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className={`lesson-img ${lesson.category === "Đang khóa" ? "locked" : ""}`}
                />
                <div className="practice-progress">
                  <div className="progress-bar" style={{ width: `${lesson.progress}%` }}></div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeList;
