import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = async () => {
    navigate("/page4");
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
      <div className="options" style={{ gap: '20px' }}>
        <div
          className={`option ${selectedOption === 1 ? "selected" : ""}`}
          onClick={() => handleSelect(1)}
        >
          <img src="/assets/grandma.svg" alt="고령자도 있어요" />
          <p className="subtext-context">고령자도 있어요</p>
        </div>
        <div
          className={`option ${selectedOption === 2 ? "selected" : ""}`}
          onClick={() => handleSelect(2)}
        >
          <img src="/assets/boy.svg" alt="아이만 있어요" />
          <p className="subtext-context">아이만 있어요</p>
        </div>
        <div
          className={`option ${selectedOption === 3 ? "selected" : ""}`}
          onClick={() => handleSelect(3)}
        >
          <img id="img3" src="/assets/family.svg" alt="둘 다 있어요" />
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
