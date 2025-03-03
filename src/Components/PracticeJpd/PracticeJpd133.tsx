import React from "react";
import '../PracticeList/PracticeList.css'

// Import ảnh của từng bài học
import lesson1Img from "../../assets/Practice List/P133-1-1_260px x 230px.png";
import lesson2Img from "../../assets/Practice List/P133-2-1_260px x 230px.png";

import DataAvaIcon from "../../assets/Icons/data-avatar.svg"; 
import { ReactComponent as ImgActive } from "../../assets/Icons/arrow.svg"; 
import { ReactComponent as ImgInactive } from "../../assets/Icons/lock.svg"; 


interface PracticeInfo {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    note: string;
    category: "Đã hoàn thành" | "Đang làm" | "Đang khóa";
    image: string;
    progress: number;
  }
  
  const categoryClassMap = {
    "Đã hoàn thành": "completed",
    "Đang làm": "doing",
    "Đang khóa": "locked",
    "Nâng cấp để mở": "upgrade",
};

  

const practiceInfo: PracticeInfo[] = [
    { id: 1, title: "ĐỀ SỐ 1", subtitle: "Ôn tập:", desc: "JPD133", 
        note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson1Img, progress: 0 },
    { id: 2, title: "ĐỀ SỐ 2", subtitle: "Ôn tập:", desc: "JPD133", 
        note: "Bài tập tổng hợp", category: "Nâng cấp để mở", image: lesson2Img, progress: 0 },
];
 
 
  
  const getRandomCount = () => Math.floor(Math.random() * 50) + 1;
  
  const PracticeList133: React.FC = () => {
    return (
      <div className="practice">
        <h3 className="title">ÔN TẬP TỔNG HỢP JPD133</h3>
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
                    {lesson.category === "Đã hoàn thành" || lesson.category === "Đang làm" ? (
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
  
  export default PracticeList133;
  