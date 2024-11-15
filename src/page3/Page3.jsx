import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./page3.css"; 

const Page3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = async () => {
    if (selectedOption !== null) {
      try {
        await axios.post('/api/알아서정하시면됩니당~', { option: selectedOption });
        navigate("/page4");
      } catch (error) {
        console.error("Error sending option to server:", error);
      }
    }
  };

  const handlePrevious = () => {
    navigate("/page2"); 
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(3 / 5) * 100}%` }}></div>
      </div>
      <h1>구성원 중에 아이나 고령자가 있나요?</h1>
      <p className="subtext">아이 - 12세 이하 / 고령자 - 65세 이상</p>
      <div className="options">
        <div
          className={`option ${selectedOption === 1 ? "selected" : ""}`}
          onMouseEnter={() => handleSelect(1)}
          onClick={() => handleSelect(1)}
        >
          <img src="/assets/girl.png" alt="고령자도 있어요" />
          <p className="subtext-context">고령자도 있어요</p>
        </div>
        <div
          className={`option ${selectedOption === 2 ? "selected" : ""}`}
          onMouseEnter={() => handleSelect(2)}
          onClick={() => handleSelect(2)}
        >
          <img src="/assets/boy.png" alt="아이만 있어요" />
          <p className="subtext-context">아이만 있어요</p>
        </div>
        <div
          className={`option ${selectedOption === 3 ? "selected" : ""}`}
          onMouseEnter={() => handleSelect(3)}
          onClick={() => handleSelect(3)}
        >
          <img id="img3" src="/assets/family.png" alt="둘 다 있어요" />
          <p className="subtext-context">둘 다 있어요</p>
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

export default Page3;
