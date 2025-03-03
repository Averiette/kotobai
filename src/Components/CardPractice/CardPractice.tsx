import React from 'react';
import { ReactComponent as ArrowIcon } from "../../assets/Icons/arrow.svg"; 
import practiceImg from '../../assets/Cards/Practice.png';
import testImg from '../../assets/Cards/Test.png';
import dictionaryImg from '../../assets/Cards/Dictionary.png';
import grammarImg from '../../assets/Cards/Grammar.png';

interface PracticeItemProps {
    title: string;
    category: string;
    imageUrl: string;
    progress: number;
}

export const practiceData = [
    { title: 'Khổ luyện thành tài', category: 'Practice', imageUrl: practiceImg, progress: 30 },
    { title: 'Giải đề không ngừng nghỉ', category: 'Test', imageUrl: testImg, progress: 60 },
    { title: 'Tra từ thật dễ', category: 'Dictionary', imageUrl: dictionaryImg, progress: 40 },
    { title: 'Phá đảo ngữ pháp\nTrở thành cao thủ', category: 'Grammar', imageUrl: grammarImg, progress: 70 },
];

const PracticeItem: React.FC<PracticeItemProps> = ({ title, category, imageUrl, progress }) => {
    return (
    <div className="cardItem">
        <div className="cardItem-header">
        <span className="cardItem-category s8">{category}</span>
        <span className="cardItem-icon">
            <ArrowIcon className="icon-svg" alt="Arrow Icon" />
        </span>
        </div>
        <h4 className="cardItem-title">{title}</h4>
        <img src={imageUrl} alt={title} className="cardItem-image" />
        <div className="cardItem-progress">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    </div>
    );
};

export default PracticeItem;
