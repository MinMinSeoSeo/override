import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./page4.css"; 

const Page4 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOptions(prev => {
      if (prev.includes(option)) { // 이미 선택된 옵션을 클릭한 경우
        if (prev.length === 3 && option === 2) {
          // (예외 처리) 하, 중, 상이 모두 선택된 상황 => 중 클릭 => 중만 선택되도록 (나머지는 선택 해제)
          return [option];
        } else {
          // 그 외 경우엔, 정상적으로 클릭한 옵션에 대해 선택 해제 실행
          return prev.filter(o => o !== option);
        }
      } else { // 새로운(선택되지 않은) 옵션을 클릭한 경우
        if (prev.length === 1 && Math.abs(prev[0] - option) === 2) {
          // 하를 선택한 상황에서 상을 선택하거나, 상을 선택한 상황에서 하를 선택한 경우 => 하, 중, 상 모두 선택되도록
          return [1,2,3];
        } else {
          // 선택한 옵션 추가
          return [...prev, option].sort();
        }
      }
    });
  };  

  const handleNext = async () => {
    if (selectedOptions !== null) {
      try {
        await axios.post('/api/mingu', { option: selectedOptions });
        navigate("/page5");
      } catch (error) {
        console.error("Error sending option to server:", error);
      }
    }
  };

  const handlePrevious = () => {
    navigate("/page3"); 
  };

  const getBoundaryClass = () => {
    if (selectedOptions.includes(1)) return "flex-start";
    else if (selectedOptions.includes(3)) return "flex-end";
    return "center";
  };

  const getRoundBoundaryWidth = () => {
    switch (selectedOptions.length) {
      case 1:
        return '114px';
      case 2:
        return '264px';
      case 3:
        return '414px';
      default:
        return '0px';
    }
  };

  const getRoundBoundaryVisibility = () => {
    return selectedOptions.length > 0 ? 'visible' : 'invisible' ;
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(4 / 5) * 100}%` }}></div>
      </div>
      <h1>원하는 놀이기구의 난이도를 선택해주세요</h1>
      <p className="subtext">하 / 중 / 상 (중복 선택 가능)</p>
      <div className="options">
        <div id="boundary" className={`${getBoundaryClass()}`}>
          <div 
            id='round-boundary' 
            className={getRoundBoundaryVisibility()}
            style={{ width: getRoundBoundaryWidth() }}></div>
        </div>
        <div
          className={`option ${selectedOptions.includes(1) ? "selected" : ""}`}
          //onMouseEnter={() => handleSelect(1)}
          onClick={() => handleSelect(1)}
        >
          {/*<img src="/assets/girl.png" alt="하" />*/}
          <p className="subtext-context">하</p>
        </div>
        <div
          className={`option ${selectedOptions.includes(2) ? "selected" : ""}`}
          //onMouseEnter={() => handleSelect(2)}
          onClick={() => handleSelect(2)}
        >
          {/*<img src="/assets/boy.png" alt="중" />*/}
          <p className="subtext-context">중</p>
        </div>
        <div
          className={`option ${selectedOptions.includes(3) ? "selected" : ""}`}
          //onMouseEnter={() => handleSelect(3)}
          onClick={() => handleSelect(3)}
        >
          {/*<img id="img3" src="/assets/family.png" alt="상" />*/}
          <p className="subtext-context">상</p>
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

export default Page4;
