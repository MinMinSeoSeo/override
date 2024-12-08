import { useState } from 'react';

export default function AttractionCard({ attraction, attractionIndex }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleCardClick() {
    setIsFlipped((prevState) => !prevState);
  }

  return (
    <div
      className={`item-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className="item-card-front">
        <div className="item-order">
          <span>{attractionIndex + 1}</span>
        </div>
        <div className="item-name">{attraction.name}</div>
        <div className="item-image-wrapper">
          <img
            src={attraction.imageUrl}
            alt={attraction.name}
            className="item-image"
          />
        </div>
      </div>
      <div className="item-card-back">
        <div className="item-image-wrapper">
          <div className="item-details">
            <div>
              <strong>• 설명:</strong> {attraction.description}
            </div>
            <div>
              <strong>• 위치:</strong> {attraction.location}
            </div>
            <div>
              <strong>• 난이도:</strong> {attraction.difficulty}
            </div>
            <div>
              <strong>• 이용 정보:</strong> {attraction.usageInfo}
            </div>
            <div>
              <strong>• 컨셉/태그:</strong> {attraction.concept}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
