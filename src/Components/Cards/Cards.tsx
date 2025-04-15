import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import CardItem from '@Components/CardLayout/CardLayout';
import LessonItem from '@Components/LessonItem/LessonItem';
import PracticeItem, { practiceData } from '@Components/CardPractice/CardPractice';
// Assets
import hiraganaImg from '@assets/Cards/Hiragana.png';
import katakanaImg from '@assets/Cards/Katakana.png';
import kanjiImg from '@assets/Cards/Kanji.png';
//Data
import { lessonData } from "@data/lessonData/lessonData";
//CSS
import './Cards.css'  
import '@Components/LessonItem/LessonItem.css'

const cardData = [
  { title: 'Hiragana', category: 'Alphabet', imageUrl: hiraganaImg, progress: 0, link: '/alphabet/hiragana' },
  { title: 'Katakana', category: 'Alphabet', imageUrl: katakanaImg, progress: 0, link: '/alphabet/hiragana' },
  { title: 'Kanji', category: 'Characters', imageUrl: kanjiImg, progress: 0, link: '/alphabet/hiragana' },
];

const Cards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-layout">
      
      <h3 className="title">BẢNG CHỮ CÁI</h3>
      <div className="cards-container">
      <div className="card-block">
        <div className="card-block">
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
      </div>
      </div>
      
      <h3 className="title">BÀI HỌC CƠ BẢN</h3>
      <div className="cards-container">
      <div className="card-block">
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
      </div>

      
      <h3 className="title">LUYỆN THI</h3>
      <div className="cards-container">
      <div className="card-block">
        {practiceData.map((card, index) => (
          <PracticeItem key={index} {...card} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Cards;
