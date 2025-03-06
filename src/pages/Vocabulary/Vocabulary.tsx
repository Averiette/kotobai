import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// Import Components
import Navbar from "../../Components/Navbar/Navbar";
import CardItem from "../../Components/CardLayout/CardLayout";
import BackButton from "../../Components/Button/BackButton/BackButton";

// Import Data
import { lessonCategories } from "../../data/LearnLesson/LearnLesson";
import { NameLesson } from "../../data/NameLesson";
// Import Css
import styles from "../Lesson/Lesson.module.css";

const Vocabulary: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); // Lấy ID bài học từ URL

    console.log("ID bài học:", id); // Kiểm tra ID có lấy đúng không

    // Kiểm tra nếu ID không tồn tại hoặc không hợp lệ
    if (!id || isNaN(Number(id))) {
        return <h2>Không tìm thấy bài học phù hợp</h2>;
    }

    // Tìm bài học tương ứng
    const lesson = NameLesson.find(lesson => lesson.id === Number(id));

    // Nếu không tìm thấy bài học
    if (!lesson) {
        return <h2>Bài học không tồn tại</h2>;
    }

    // Lọc danh sách từ vựng của bài học hiện tại
    const vocabularyList = lessonCategories.filter(item => item.category === "Vocabulary");

    return (
        <div className="main-layout">
            <div className={styles["lesson-container"]}>
                <Navbar />
                <div className={styles["heading"]}>
                    {/* Nút quay lại về bài học trước đó */}
                    <BackButton onClick={() => navigate(`/lesson/${id}`)} label="Quay lại bài học" />

                    <div className={styles["lesson-header"]}>
                        <h2 className={styles["lesson-title"]}>{lesson.name}</h2>
                    </div>
                </div>
            </div>

            <div className={styles["lesson-container"]}>
                <h3>DANH SÁCH TỪ VỰNG</h3>

                {/* Nếu có dữ liệu khác (thêm dạng danh mục CardItem) */}
                <div className={styles["lesson-grid"]}>
                    {vocabularyList.length > 0 ? (
                        vocabularyList.map((item) => (
                            <CardItem key={item.id} {...item} />
                        ))
                    ) : (
                        <p>Không có dữ liệu từ vựng.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Vocabulary;
