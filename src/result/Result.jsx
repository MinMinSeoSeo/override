import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../page1_4.css";
import "./result.css"; 
import data from "../data/data.json";

const Result = () => {
  const navigate = useNavigate();
  const [displayedCombos, setDisplayedCombos] = useState(2);
  const [flippedCards, setFlippedCards] = useState({});

  const getRandomCombos = () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const combos = [];
    while (shuffled.length) {
      combos.push(shuffled.splice(0, 4)); 
    }
    return combos;
  };

  const [combos] = useState(getRandomCombos());

  const handleMoreCombos = () => {
    if (displayedCombos < combos.length) {
      setDisplayedCombos(displayedCombos + 2);
    }
  };

  const handleCardClick = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress" style={{ width: "100%" }}></div>
      </div>
      <h1>놀이기구 추천 조합을 확인해보세요!</h1>
      <div className="combos">
        {combos.slice(0, displayedCombos).map((combo, comboIndex) => (
          <div key={comboIndex} className="combo-container">
            <div className="combo-label">
              {String.fromCharCode(65 + comboIndex)}
            </div>
            <div className="combo-box">
              <div className="items-wrapper">
                {combo.map((item, itemIndex) => {
                  const globalIndex = comboIndex * 4 + itemIndex;
                  const isFlipped = flippedCards[globalIndex] || false;

                  return (
                    <div
                      key={itemIndex}
                      className={`item-card ${isFlipped ? "flipped" : ""}`}
                      onClick={() => handleCardClick(globalIndex)}
                    >
                      <div className="item-card-front">
                        <div className="item-order">
                          <span>{itemIndex + 1}</span>
                        </div>
                        <div className="item-name">
                          {item["놀이기구 이름"]}
                        </div>
                        <div className="item-image-wrapper">
                          <img
                            src={item.image_url}
                            alt={item["놀이기구 이름"]}
                            className="item-image"
                          />
                        </div>
                      </div>
                      <div className="item-card-back">
                        <div className="item-image-wrapper">
                          <div className="item-details">
                            <div>
                              <strong>• 설명:</strong> {item.설명}
                            </div>
                            <div>
                              <strong>• 위치:</strong> {item.위치정보}
                            </div>
                            <div>
                              <strong>• 난이도:</strong> {item["난이도(스릴)"]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedCombos < combos.length && (
        <button className="more-btn" onClick={handleMoreCombos}>
          더보기
        </button>
      )}
      <div className="navigation">
        <button className="prev-button" onClick={() => navigate("/page5")}>
          이전
        </button>
        <button className="next-button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Result;
