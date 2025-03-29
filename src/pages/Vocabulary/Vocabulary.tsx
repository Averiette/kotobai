import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import Navbar from "../../Components/Navbar/Navbar";
import BackButton from "../../Components/Button/BackButton/BackButton";
import StarIcon from "../../Components/Icons/StarIcon/StarIcon";
//Data
import { NameLesson } from "../../data/NameLesson";
//CSS
import lessonStyles from "../Lesson/Lesson.module.css";
import vocabStyles from "./Vocabulary.module.css";

interface VocabWord {
    id: number;
    word: string;
    kanji: string;
    romaji: string;
    meaning: string;
}

interface VocabGroup {
    nameJP: string;
    nameVI: string;
    words: VocabWord[];
}

const Vocabulary: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [lessonVocabData, setLessonVocabData] = useState<VocabGroup[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    if (!id || isNaN(Number(id))) {
        return <h2>Không tìm thấy bài học phù hợp</h2>;
    }

    const lesson = NameLesson.find((lesson) => lesson.id === Number(id));

    if (!lesson) {
        return <h2>Bài học không tồn tại</h2>;
    }

    // Load dữ liệu từ file vocabulary tương ứng với lesson ID
    useEffect(() => {
        const loadVocabularyData = async () => {
            setLoading(true);
            setError(null);

            try {
                const vocabModule = await import(
                    `../../data/VocabData/Vocabulary${id}.ts`
                );
                if (vocabModule?.vocabData) {
                    setLessonVocabData(Object.values(vocabModule.vocabData));
                } else {
                    throw new Error("Dữ liệu từ vựng không hợp lệ");
                }
            } catch (error) {
                console.error("Không tìm thấy dữ liệu từ vựng cho bài học:", id, error);
                setError("Không tìm thấy dữ liệu từ vựng.");
                setLessonVocabData([]);
            } finally {
                setLoading(false);
            }
        };

        loadVocabularyData();
    }, [id]);

    return (
        <div className="main-layout">
            <div className={lessonStyles["lesson-container"]}>
                <Navbar />
                <div className={lessonStyles["heading"]}>

                    <BackButton to={`/lesson/${id}`} label="Quay lại bài học" />
                    <div className={lessonStyles["lesson-header"]}>
                        <h2 className={lessonStyles["lesson-title"]}>{lesson.name}</h2>
                    </div>
                </div>
            </div>

            <div className={lessonStyles["lesson-container"]}>
                {loading ? (
                    <p className="b7">Đang tải dữ liệu từ vựng...</p>
                ) : error ? (
                    <p className="b7">{error}</p>
                ) : lessonVocabData.length > 0 ? (
                    lessonVocabData.map((group, index) => (
                        <div key={index} className={vocabStyles["vocab-group"]}>
                            <p className={`${vocabStyles["title-container"]} s4`}>
                                <span className={`${vocabStyles["part-title"]} s4`}>{group.nameJP}</span>
                                <span className={`${vocabStyles["part-subtitle"]} s6`}>{group.nameVI}</span>
                            </p>

                            <table className={`${vocabStyles["vocab-table"]} b7`}>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Lưu</th>
                                        <th>Từ vựng</th>
                                        <th>Kanji</th>
                                        <th>Romaji</th>
                                        <th>Ý nghĩa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.words.length > 0 ? (
                                        group.words.map((item, idx) => (
                                            <tr key={item.id}>
                                                <td>{idx + 1}</td>
                                                <td>
                                                    <StarIcon />
                                                </td>
                                                <td>{item.word}</td>
                                                <td>{item.kanji}</td>
                                                <td>{item.romaji}</td>
                                                <td>{item.meaning}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} style={{ textAlign: "center" }}>Không có dữ liệu từ vựng.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ))
                ) : (
                    <p className="b7">Không có dữ liệu từ vựng cho bài học này.</p>
                )}
            </div>
        </div>
    );
};

export default Vocabulary;
