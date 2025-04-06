import React from 'react';
import './LessonItem.css';
import ArrowIcon from "@assets/Icons/Arrow"; 

interface LessonItemProps {
    title: string;
    subtitle: string;
    category: string;
    imageUrl: string;
    progress: number;
    description: string;
}

const LessonItem: React.FC<LessonItemProps> = ({ title, subtitle, category, imageUrl, progress, description }) => {
    const categoryClass = category === 'Đã xong' 
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
                    <ArrowIcon className="icon-svg"/>
                </span>
            </div>

            <div className="lesson-content">
                <h6 className="lesson-title">{title}</h6>
                <h6 className="lesson-subtitle">{subtitle}</h6> 
                <p className={`${'lesson-description'} b9`}>{description}</p>
            </div>

            <img src={imageUrl} alt={title} className={`lesson-image ${imageClass}`} />

            <div className="lesson-progress">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default LessonItem;
    