    import React from "react";
    import './PracticeList.css'

    // Import ảnh của từng bài học
    import lesson1Img from "../../assets/Practice List/260px x 230px_L1.png";
    import lesson2Img from "../../assets/Practice List/260px x 230px_L2.png";
    import lesson3Img from "../../assets/Practice List/260px x 230px_L3.png";
    import lesson4Img from "../../assets/Practice List/260px x 230px_L4.png";
    import lesson5Img from "../../assets/Practice List/260px x 230px_L5.png";
    import lesson6Img from "../../assets/Practice List/260px x 230px_L6.png";
    import lesson7Img from "../../assets/Practice List/260px x 230px_L7.png";
    import lesson8Img from "../../assets/Practice List/260px x 230px_L8.png";
    import lesson9Img from "../../assets/Practice List/260px x 230px_L9.png";
    import lesson10Img from "../../assets/Practice List/260px x 230px_L10.png";

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
      };
      

      const practiceInfo: PracticeInfo[] = [
        { id: 1, title: "はじめまして", subtitle: "Ôn tập bài 1", desc: "Rất vui được gặp bạn", note: "Bài tập tổng hợp", category: "Đã hoàn thành", image: lesson1Img, progress: 40 },
        { id: 2, title: "買い物・食事", subtitle: "Ôn tập bài 2", desc: "Mua sắm・Bữa ăn", note: "Bài tập tổng hợp", category: "Đã hoàn thành", image: lesson2Img, progress: 20 },
        { id: 3, title: "スケジュール", subtitle: "Ôn tập bài 3", desc: "Lịch trình", note: "Bài tập tổng hợp", category: "Đang làm", image: lesson3Img, progress: 10 },
        { id: 4, title: "私の国・町", subtitle: "Ôn tập bài 4", desc: "Đất nước・Thị trấn của tôi", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson4Img, progress: 0 },
        { id: 5, title: "休みの日", subtitle: "Ôn tập bài 5", desc: "Ngày nghỉ", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson5Img, progress: 0 },
        { id: 6, title: "一緒に!", subtitle: "Ôn tập bài 6", desc: "Cùng nhau", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson6Img, progress: 0 },
        { id: 7, title: "友達の家で", subtitle: "Ôn tập bài 7", desc: "Ở nhà một người bạn", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson7Img, progress: 0 },
        { id: 8, title: "大切な人", subtitle: "Ôn tập bài 8", desc: "Người quan trọng", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson8Img, progress: 0 },
        { id: 9, title: "好きなこと", subtitle: "Ôn tập bài 9", desc: "Những gì tôi thích", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson9Img, progress: 0 },
        { id: 10, title: "バスツアー", subtitle: "Ôn tập bài 10", desc: "Chuyến tham quan bằng xe buýt", note: "Bài tập tổng hợp", category: "Đang khóa", image: lesson10Img, progress: 0 },
    ];    
      
      const getRandomCount = () => Math.floor(Math.random() * 50) + 1;
      
      const PracticeList: React.FC = () => {
        return (
          <div className="practice">
            <h3 className="title">LUYỆN TẬP BÀI KHÓA</h3>
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
      
      export default PracticeList;
      