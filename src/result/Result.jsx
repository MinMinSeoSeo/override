// import React, { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../page1_4.css"; 

const Result = () => {
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
 

  const handleNext = async () => {
      navigate("/");
  };

  const handlePrevious = () => {
    navigate("/page5"); 
  };

  return (
    <div className="container">

      <div className="progress-bar">
        <div className="progress" style={{ width: `${(6 / 6) * 100}%` }}></div>
      </div>
      <h1>놀이기구 추천 조합을 확인해보세요!</h1>
      <p className="subtext">하 / 중 / 상 (중복 선택 가능)</p>
      <div className="navigation">
        <button className="prev-button" onClick={handlePrevious}>
          이전
        </button>
        <button className="next-button" onClick={handleNext}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Result;
