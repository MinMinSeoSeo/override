import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./page1.css"; 

const Page1 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();
  
    const handleSelect = (option) => {
      setSelectedOption(option);
    };

  const handleNext = async () => {
    if (selectedOptions !== null) {
      try {
        await axios.post('/api/mingu', { option: selectedOptions });
        navigate("/page2");
      } catch (error) {
        console.error("Error sending option to server:", error);
        navigate("/page2");
      }
    }
  };

  const handlePrevious = () => {
    navigate("/"); 
  };

  return (
    <div className="container">
      <style>
        {`
          .options {
            position: relative;
          }
          .option {
            box-sizing: border-box;
            width: 100px;
            height: 100px;
            margin: 0 25px;
            padding: 0;
            border-radius: 50%;
            justify-content: center;
          }
          
          .option.selected .subtext-context{
            color: darkgreen;
          }
          
          .subtext-context {
            padding: 0;
            font-size: 22px;
          }
        `}
      </style>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(1 / 5) * 100}%` }}></div>
      </div>
      <h1>타고 싶은 놀이기구 개수를 선택해주세요.</h1>
      <div className="options">
        <div
          className={`option ${selectedOption === 1 ? "selected" : ""}`}
          onClick={() => handleSelect(1)}
        >
          <p className="subtext-context">1</p>
        </div>
        <div
          className={`option ${selectedOption === 2 ? "selected" : ""}`}
          onClick={() => handleSelect(2)}
        >
          <p className="subtext-context">2</p>
        </div>
        <div
          className={`option ${selectedOption === 3 ? "selected" : ""}`}
          onClick={() => handleSelect(3)}
        >
          <p className="subtext-context">3</p>
        </div>
        <div
          className={`option ${selectedOption === 4 ? "selected" : ""}`}
          onClick={() => handleSelect(4)}
        >
          <p className="subtext-context">4</p>
        </div>
        <div
          className={`option ${selectedOption === 5 ? "selected" : ""}`}
          onClick={() => handleSelect(5)}
        >
          <p className="subtext-context">5</p>
        </div>
      </div>
      <div className="navigation">
        <button className="prev-button" onClick={handlePrevious}>
          이전
        </button>
        <button className="next-button" onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Page1;
