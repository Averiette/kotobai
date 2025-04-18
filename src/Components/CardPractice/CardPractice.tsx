import React from 'react';
import { useNavigate } from 'react-router-dom';
// Assets
import ArrowIcon from "@assets/Icons/Arrow"; 
import practiceImg from '@assets/Cards/Practice.png';
import testImg from "@assets/Cards/Test.png";
import dictionaryImg from "@assets/Cards/Dictionary.png";
import grammarImg from "@assets/Cards/Grammar.png";
//CSS
import "@Components/Cards/Cards.css"
interface PracticeItemProps {
    title: string;
    category: string;
    imageUrl: string;
    progress: number;
    link: string;
}

export const practiceData = [
    { title: 'Khổ luyện', category: 'Practice', imageUrl: practiceImg, progress: 0, link: '/practice' },
    { title: 'Giải đề', category: 'Test', imageUrl: testImg, progress: 0, link: '/test' },
    { title: 'Tra từ', category: 'Dictionary', imageUrl: dictionaryImg, progress: 0, link: '/dictionary' },
    { title: 'Ngữ pháp', category: 'Grammar', imageUrl: grammarImg, progress: 0, link: '/grammar' },
];

const PracticeItem: React.FC<PracticeItemProps> = ({ title, category, imageUrl, progress, link }) => {
    const navigate = useNavigate();

    return (
        <div className="cardItem" onClick={() => navigate(link)} style={{ cursor: 'pointer' }}>
            <div className="cardItem-header">
                <span className="cardItem-category s8">{category}</span>
                <span className="cardItem-icon">
                    <ArrowIcon className="icon-svg" />
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
