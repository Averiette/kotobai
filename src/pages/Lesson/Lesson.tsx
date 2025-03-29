import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// Components
import Navbar from "@Components/Navbar/Navbar";
import CardItem from "@Components/CardLayout/CardLayout";
// Assets
import ArrowBackIcon from '@assets/Icons/BackArrow';
import ArrowNextIcon from '@assets/Icons/NextArrow';
//Data
import { lessonCategories, practiceCategories } from "@data/LearnLesson/LearnLesson";
import { NameLesson } from "@data/NameLesson";
//CSS
import styles from "./Lesson.module.css";

const Lesson: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    
    // Tìm vị trí bài học trong danh sách
    const lessonIndex = NameLesson.findIndex((lesson) => lesson.id === Number(id));

    // Kiểm tra nếu không tìm thấy bài học
    if (lessonIndex === -1) {
        return <h2>Bài học không tồn tại</h2>;
    }

    const lesson = NameLesson[lessonIndex];

    // Xác định ID bài trước và bài sau
    const prevLessonId = lessonIndex > 0 ? NameLesson[lessonIndex - 1].id : null;
    const nextLessonId = lessonIndex < NameLesson.length - 1 ? NameLesson[lessonIndex + 1].id : null;

    // Xử lý điều hướng khi chọn danh mục bài học
    const handleCategoryClick = (category: string) => {
        const routes: Record<string, string> = {
            "Vocabulary": `/vocabulary/${id}`,
            "Dialogue": `/dialogue/${id}`,
            "Grammar": `/grammar`,
            "Listen": `/listen/${id}`,
            "Practice": `/practice/${id}` 
        };

        if (routes[category]) {
            navigate(routes[category]);
        } else {
            console.warn(`Danh mục ${category} không hợp lệ.`);
        }
    };

    return (
        <div className="main-layout">
            {/* Header */}
            <div className={styles["lesson-container"]}>
                <Navbar />
                <div className={styles["heading"]}>
                    <button onClick={() => navigate("/")} className={`${styles["back-button"]} b6`}>
                        <ArrowBackIcon className={styles["back-icon"]} />
                        Quay lại
                    </button>
                    {/* Tiêu đề bài học */}
                    <div className={styles["lesson-header"]}>
                        <h2 className={styles["lesson-title"]}>{lesson.name}</h2>

                        {/* Điều hướng bài trước / bài sau */}
                        <div className={styles["lesson-navigation"]}>
                            {prevLessonId && (
                                <button 
                                    className={`${styles["nav-button"]} b6`}  
                                    onClick={() => navigate(`/lesson/${prevLessonId}`)}
                                >
                                    <ArrowBackIcon className={styles["arrow-icon"]} />
                                    Bài trước
                                </button>
                            )}
                            {nextLessonId && (
                                <button 
                                    className={`${styles["nav-button"]} b6`} 
                                    onClick={() => navigate(`/lesson/${nextLessonId}`)}
                                >
                                    Bài sau
                                    <ArrowNextIcon className={styles["arrow-icon"]} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Danh sách bài học */}
            <div className={styles["lesson-container"]}>
                <h3>BÀI HỌC:</h3>
                <div className={styles["lesson-grid"]}>
                    {lessonCategories.map((item) => (
                        <CardItem 
                            key={item.id} 
                            {...item} 
                            onClick={() => handleCategoryClick(item.category)}
                        />
                    ))}
                </div>
            </div>

            {/* Bài tập & Ghi chú */}
            <div className={styles["lesson-half-container"]}>
                <div className={styles["container-left"]}>
                    <h3>BÀI TẬP</h3>
                    <div className={styles["lesson-grid"]}>
                        {practiceCategories.map((item) => (
                            <CardItem key={item.id} {...item} onClick={() => handleCategoryClick("Practice")} />
                        ))}
                    </div>
                </div>

                <div className={styles["container-right"]}>
                    <h3>GHI CHÚ</h3>
                    <textarea className={`${styles["notes-box"]} b6`} placeholder="Ghi tại đây..."></textarea>
                </div>
            </div>
        </div>
    );
};

export default Lesson;
