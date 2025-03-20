import React from 'react';
import { useNavigate } from 'react-router-dom';

import CardItem from '../CardLayout/CardLayout';
import LessonItem from '../LessonItem/LessonItem';
import PracticeItem, { practiceData } from '../CardPractice/CardPractice';

// Import Assets
import hiraganaImg from '../../assets/Cards/Hiragana.png';
import katakanaImg from '../../assets/Cards/Katakana.png';
import kanjiImg from '../../assets/Cards/Kanji.png';

// Import Data
import { lessonData } from "../../data/lessonData/lessonData";

// Import Css
import './Cards.css'  
import '../LessonItem/LessonItem.css'

const cardData = [
  { title: 'Hiragana', category: 'Alphabet', imageUrl: hiraganaImg, progress: 80, link: '/alphabet/hiragana' },
  { title: 'Katakana', category: 'Alphabet', imageUrl: katakanaImg, progress: 60, link: '/alphabet/katakana' },
  { title: 'Kanji', category: 'Characters', imageUrl: kanjiImg, progress: 40, link: '/alphabet/kanji' },
];

const Cards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cards">
      <h3 className="cards-title">BẢNG CHỮ CÁI</h3>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="card-item" 
            onClick={() => navigate(card.link)}
            style={{ cursor: 'pointer' }} 
          >
            <CardItem {...card} />
          </div>
        ))}
      </div>

      <h3 className="cards-title">BÀI HỌC CƠ BẢN</h3>
      <div className="cards-container">
        {lessonData.map((lesson) => (
          <div 
            key={lesson.id} 
            className="lesson-card" 
            onClick={() => navigate(`/lesson/${lesson.id}`)} 
          >
            <LessonItem {...lesson} />
          </div>
        ))}
      </div>

      <h3 className="cards-title">LUYỆN THI</h3>
      <div className="cards-container">
        {practiceData.map((card, index) => (
          <PracticeItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
