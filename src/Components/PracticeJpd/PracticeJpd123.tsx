import React, { useState } from "react";
// Assets
import lesson1Img from "../../assets/Practice List/P123-1-1_260px x 230px.png";
import lesson2Img from "../../assets/Practice List/P123-2-1_260px x 230px.png";
import lesson3Img from "../../assets/Practice List/P123-3-1_260px x 230px.png";
import lesson4Img from "../../assets/Practice List/P123-4-1_260px x 230px.png";
import DataAvaIcon from "../../assets/Icons/data-avatar.svg"; 
import ImgActive from "@assets/Icons/Arrow";
import ImgInactive from "@assets/Icons/Lock";
//CSS
import '@Components/PracticeList/PracticeList.css'

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

  
const categoryClassMap: Record<PracticeInfo["category"], string> = {
  "Đã xong": "completed",
  "Đang làm": "doing",
  "Đang khóa": "locked",
  "Nâng cấp để mở": "upgrade",
};

const practiceInfo: PracticeInfo[] = [
    { id: 1, title: "ĐỀ SỐ 1", subtitle: "Ôn tập:", desc: "JPD123", 
        note: "Bài tập tổng hợp", category: "Đã xong", image: lesson1Img, progress: 100 },
    { id: 2, title: "ĐỀ SỐ 2", subtitle: "Ôn tập:", desc: "JPD123", 
        note: "Bài tập tổng hợp", category: "Đang làm", image: lesson2Img, progress: 20 },
    { id: 3, title: "ĐỀ SỐ 3", subtitle: "Ôn tập:", desc: "JPD123", 
        note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson3Img, progress: 0 },
    { id: 4, title: "ĐỀ SỐ 4", subtitle: "Ôn tập:", desc: "JPD123", 
        note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson4Img, progress: 0 },
];
 
 
  
  const getRandomCount = () => Math.floor(Math.random() * 50) + 1;
  const [isOpen, setIsOpen] = useState(false);

  const PracticeList123: React.FC = () => {
    return (
      <div className="practice">
        <h3 className="title">ÔN TẬP TỔNG HỢP JPD123</h3>
        <div className="practice-container">
          {practiceInfo.map((lesson) => (
            <div key={lesson.id} className={`practice-block ${categoryClassMap[lesson.category]}`}>
              {/* Phần trên: Avatar và trạng thái bài học */}
              <div className="practice-block-upper">
                {/* BACKEND DATA AVA USERUSER */}
                <div className="avatar-frame">
                  <img src={DataAvaIcon} alt="avatar" className="data-avatar" onClick={() => setIsOpen(!isOpen)} />
                  <img src={DataAvaIcon} alt="avatar" className="data-avatar" onClick={() => setIsOpen(!isOpen)} />
                  
                  <div className="data-avatar-wrapper">
                    <img src={DataAvaIcon} alt="avatar" className="data-avatar" />
                    <div className="data-avatar-overlay"></div>
                    <span className="avatar-count s8">+{getRandomCount()}</span>
                  </div>
                </div>


  
                <div className={`direction ${categoryClassMap[lesson.category]}`}>
                  <span className="practice-category s8 ">{lesson.category}</span>
                  <div className="practice-item-icon">
                    {lesson.category === "Đã xong" || lesson.category === "Đang làm" ? (
                      <ImgActive className="icon-svg" />) : (<ImgInactive className="icon-svg" />
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
                        className={`lesson-img ${["Đang khóa", "Nâng cấp để mở"].includes(lesson.category) ? "locked" : ""}`}/>
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
  
  export default PracticeList123;
  