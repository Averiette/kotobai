import React from 'react';
import './LessonItem.css';
import { ReactComponent as ArrowIcon } from "../../assets/Icons/arrow.svg"; 

interface LessonItemProps {
    title: string;
    subtitle: string;
    category: string;
    imageUrl: string;
    progress: number;
    description: string;
}

const LessonItem: React.FC<LessonItemProps> = ({ title, subtitle, category, imageUrl, progress, description }) => {
    const categoryClass = category === 'Đã hoàn thành' 
        ? 'completed' 
        : category === 'Đang học' 
        ? 'doing' 
        : 'not-started';

    const imageClass = category === 'Chưa học' ? 'grayscale' : ''; 

    return (
        <div className={`lesson-item ${categoryClass}`}>
            <div className="lesson-header">
                <span className={`lesson-category s8 ${categoryClass}`}>
                    {category}
                </span>

                <span className={`lesson-item-icon ${categoryClass}`}>
                    <ArrowIcon className="icon-svg" alt="Arrow Icon" />
                </span>
            </div>

            <div className="lesson-content">
                <h5 className="lesson-title">{title}</h5>
                <h5 className="lesson-subtitle">{subtitle}</h5> 
                <s9 className="lesson-description">{description}</s9>
            </div>

            <img src={imageUrl} alt={title} className={`lesson-image ${imageClass}`} />

            <div className="lesson-progress">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default LessonItem;
    