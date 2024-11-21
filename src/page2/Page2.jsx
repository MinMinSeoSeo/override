import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = async () => {
    navigate("/page3", { state: { selectedOption } });
  };

  const handlePrevious = () => {
    navigate("/page1"); 
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(2 / 5) * 100}%` }}></div>
      </div>
      <h1>인원 형태를 입력해주세요.</h1>
      <p className="subtext">가족 / 친구 / 연인 / 혼자 </p>
      <div className="options">
        <div
          className={`option ${selectedOption === 1 ? "selected" : ""}`}
          onClick={() => handleSelect(1)}
        >
          <img src="/assets/family.png" alt="가족" />
          <p className="subtext-context">가족</p>
        </div>
        <div
          className={`option ${selectedOption === 2 ? "selected" : ""}`}
          onClick={() => handleSelect(2)}
        >
          <img src="/assets/couple.png" alt="연인" />
          <p className="subtext-context">연인</p>
        </div>
        <div
          className={`option ${selectedOption === 3 ? "selected" : ""}`}
          onClick={() => handleSelect(3)}
        >
          <img src="/assets/friend.png" alt="친구" />
          <p className="subtext-context">친구</p>
        </div>
        <div
          className={`option ${selectedOption === 4 ? "selected" : ""}`} 
          onClick={() => handleSelect(4)}
        >
          <img src="/assets/alone.png" alt="혼자" />
          <p className="subtext-context">혼자</p>
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

export default Page2;
