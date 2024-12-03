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
              <strong>• 설명:</strong> {attraction.설명}
            </div>
            <div>
              <strong>• 위치:</strong> {attraction.위치정보}
            </div>
            <div>
              <strong>• 난이도:</strong> {attraction['난이도(스릴)']}
            </div>
            <div>
              <strong>• 이용 정보:</strong> {attraction['이용 정보']}
            </div>
            <div>
              <strong>• 컨셉/태그:</strong> {attraction['컨셉/태그']}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
