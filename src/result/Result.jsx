import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../page1_4.css";
import data from "../data/data.json";

const Result = () => {
  const navigate = useNavigate();
  const [displayedCombos, setDisplayedCombos] = useState(2); // 처음에 A, B만 표시
  const [currentScroll, setCurrentScroll] = useState({ A: 0, B: 0, C: 0, D: 0 }); // 각 조합의 스크롤 상태

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

  const handleScroll = (combo, direction) => {
    console.log(`Scrolling combo ${combo} in direction ${direction}`); // 스크롤 방향 확인
    console.log("Previous Scroll State:", currentScroll);
    setCurrentScroll((prev) => {
      const newScroll = Math.max(
        0,
        Math.min(prev[combo] + direction, combos[combo].length - 3)
      );
      console.log(`Updated Scroll for Combo ${combo}:`, newScroll); // 업데이트된 스크롤 상태 확인
      return { ...prev, [combo]: newScroll };
    });
  };

  const handleCardClick = (item) => {
    console.log("Card Clicked:", item); // 클릭한 카드 데이터 확인
    alert(
      `설명: ${item.설명}\n위치: ${item.위치정보}\n난이도: ${item["난이도(스릴)"]}`
    );
  };

  return (
    <div className="container">
      <style>
        {`
          .combo-box {
            margin: 1rem 0;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 1rem;
          }
          
          .items-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
          
          .scroll-btn {
            background: #58cc02;
            border: none;
            padding: 0.5rem 1rem;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
          }
          
          .items {
            display: flex;
            flex-direction: row; /* 가로 스크롤 */
            overflow-x: auto;    /* 스크롤 가능 */
            gap: 10px;
            height: 150px;       /* 기본 높이 설정 */
          }
          
          .item-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 120px;
            height: 150px;
            background-color: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          }
          
          .item-card img {
            width: 100%;
            height: 100px;
            object-fit: cover;
          }
          
          .item-card p {
            margin: 5px 0 0;
            text-align: center;
            font-size: 14px;
            color: #333;
          }
          
          
          .more-btn {
            margin-top: 1rem;
            padding: 0.5rem 2rem;
            background-color: #42c62f;
            border: none;
            color: white;
            border-radius: 10px;
            font-size: 1rem;
            cursor: pointer;
          }          
        `}
      </style>

      <div className="progress-bar">
        <div className="progress" style={{ width: "100%" }}></div>
      </div>
      <h1>놀이기구 추천 조합을 확인해보세요!</h1>
      <div className="combos">
        {combos.slice(0, displayedCombos).map((combo, index) => {
          console.log(`Rendering Combo ${String.fromCharCode(65 + index)}:`, combo); // 조합 데이터를 출력
          return (
            <div key={index} className="combo-box">
              <h2>조합 {String.fromCharCode(65 + index)}</h2>
              <div className="items-wrapper">
                <button
                  className="scroll-btn"
                  onClick={() => handleScroll(index, -1)}
                  disabled={currentScroll[index] === 0}
                >
                  {"<"}
                </button>
                <div className="items">
                  {combo.slice(
                    currentScroll[index] || 0,
                    (currentScroll[index] || 0) + 3
                  ).map((item, idx) => {
                    console.log("Rendering item:", item);
                    return (
                      <div
                        key={idx}
                        className="item-card"
                        onClick={() => handleCardClick(item)}
                      >
                        <img
                          src={item.image_url}
                          alt={item["놀이기구 이름"]}
                          onError={() => console.error("이미지 로드 실패:", item.image_url)}
                        />
                        <p>{item["놀이기구 이름"]}</p>
                      </div>
                    );
                  })}
                </div>


                <button
                  className="scroll-btn"
                  onClick={() => handleScroll(index, 1)}
                  disabled={currentScroll[index] + 3 >= combo.length}
                >
                  {">"}
                </button>
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
