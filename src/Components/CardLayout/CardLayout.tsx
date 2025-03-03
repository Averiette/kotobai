import React from 'react';
import { ReactComponent as ArrowIcon } from "../../assets/Icons/arrow.svg"; 
import '../Cards/Cards.css'

interface CardItemProps {
  title: string;
  category: string;
  imageUrl: string;
  progress: number;
}

const formatTitle = (title: string) => {
  if (title === "Nghe đều đặn Giao tiếp tự tin") {
    return (
      <>
        Nghe đều đặn <br /> Giao tiếp tự tin
      </>
    );
  }
  return title;
};

const CardItem: React.FC<CardItemProps> = ({ title, category, imageUrl, progress }) => {
  return (
    <div className="cardItem">
      <div className="cardItem-header">
        <span className="cardItem-category s8">{category}</span>
        <span className="cardItem-icon">
          <ArrowIcon className="icon-svg" alt="Arrow Icon" />
        </span>
      </div>
      <h4 className="cardItem-title">{formatTitle(title)}</h4>
      <img src={imageUrl} alt={title} className="cardItem-image" />
      <div className="cardItem-progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default CardItem;
