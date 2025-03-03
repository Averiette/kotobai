import React from 'react';

interface CardItemProps {
  title: string;
  category: string;
  imageUrl: string;
  progress: number;
}

const CardItem: React.FC<CardItemProps> = ({ title, category, imageUrl, progress }) => {
  return (
    <div className="CardItem">
      <div className="CardItem-header">
        <span className="CardItem-category">{category}</span>
        <span className="CardItem-icon">↗</span>
      </div>
      <h3 className="CardItem-title">{title}</h3>
      <img src={imageUrl} alt={title} className="CardItem-image" />
      <div className="CardItem-progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default CardItem;
