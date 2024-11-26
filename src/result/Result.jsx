import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../page1_4.css";
import "./result.css"; 
import data from "../data/data.json";

const Result = () => {
  const navigate = useNavigate();
  const [displayedCombos, setDisplayedCombos] = useState(2); // 처음에 A, B만 표시

  // 데이터 4개씩 나누기
  const getRandomCombos = () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    console.log("Shuffled Data:", shuffled); // 데이터를 섞은 후 확인
    const combos = [];
    while (shuffled.length) {
      combos.push(shuffled.splice(0, 4)); // 4개씩 조합
    }
    console.log("Generated Combos:", combos); // 조합 생성 결과 확인
    return combos;
  };

  const [combos] = useState(getRandomCombos());

  console.log("Raw Data from JSON:", data); // data.json의 내용을 확인
  console.log("Generated Combos:", combos); // 랜덤 조합이 생성되었는지 확인

  const handleMoreCombos = () => {
    console.log("Displayed Combos Before:", displayedCombos); // 현재 표시된 조합 개수
    if (displayedCombos < combos.length) {
      setDisplayedCombos(displayedCombos + 2);
      console.log("Displayed Combos After:", displayedCombos + 2); // 업데이트된 조합 개수
    }
  };

  const handleCardClick = (item) => {
    console.log("Card Clicked:", item); // 클릭한 카드 데이터 확인
    alert(
      `설명: ${item.설명}\n위치: ${item.위치정보}\n난이도: ${item["난이도(스릴)"]}`
    );
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress" style={{ width: "100%" }}></div>
      </div>
      <h1>놀이기구 추천 조합을 확인해보세요!</h1>
      <div className="combos">
        {combos.slice(0, displayedCombos).map((combo, index) => {
          return (
            <div key={index} className="combo-container">
              <div className="combo-label">
                {String.fromCharCode(65 + index)} {/* A, B, C... */}
              </div>
              <div className="combo-box">
                <div className="items-wrapper">
                  {combo.map((item, idx) => {
                    const globalIndex = idx + 1; // 순서 표시

                    return (
                      <div
                        key={idx}
                        className="item-card"
                        onClick={() => handleCardClick(item)}
                      >
                        {/* 순서 원 */}
                        <div className="item-order">
                          <span>{globalIndex}</span>
                        </div>
                        {/* 놀이기구 이름 */}
                        <div className="item-name">
                          {item["놀이기구 이름"]}
                        </div>
                        {/* 이미지 */}
                        <div className="item-image-wrapper">
                          <img
                            src={item.image_url}
                            alt={item["놀이기구 이름"]}
                            className="item-image"
                            onError={() =>
                              console.error("이미지 로드 실패:", item.image_url)
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
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
