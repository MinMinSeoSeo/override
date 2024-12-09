const Page1 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  const handleSelect = (option) => {
    setRecommendRequest({ ...recommendRequest, attractionCount: option });
  };

  const handleNext = () => {
    if (recommendRequest.attractionCount >= 1) {
      setPageIndex(pageIndex + 1);
    } else {
      alert('놀이기구 개수를 선택해주세요!');
    }
  };

  const handlePrevious = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <div className="container">
      <style>
        {`
          .options {
            position: relative;
            align-items: center;
            height: 200px;
          }
          #horizontal-line {
            position: absolute;
            width: 80%;
            height: 0;
            border-top: 3px dotted #888;
            z-index: -1;
          }
          .option {
            box-sizing: border-box;
            width: 100px;
            height: 100px;
            margin: 0 25px;
            padding: 0;
            border-radius: 50%;
            border-width: 2px;
            justify-content: center;
            transition: all 0.3s;
            background-color: white;
          }

          .option:hover {
            color: darkgreen;
            font-size: 65px;
            transition: all 0.3s;
            background-color: #b7deb7;
          }

          .option.selected {
            width: 140px;
            height: 140px;
            border-width: 2px;
          }
          
          .option.selected .subtext-context{
            color: green;
            font-size: 65px;
            transition: all 0.3s;
          }
          
          .subtext-context {
            padding: 0;
            font-family: 'Inter';
            font-size: 48px;
            color: #888;
            transition: all 0.3s;
          }

          @media (max-width: 767px) {
            .option {
              width: 97px;
              height: 97px;
            }

            .option.selected {
              width: 102px;
              height: 102px;
              border-width: 2px;
            }

            .options {
              gap: 10px;
              flex-wrap: wrap;
              justify-content: center;
            }

          }
        
        `}
      </style>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(1 / 6) * 100}%` }}></div>
      </div>
      <h1>타고 싶은 놀이기구 개수를 선택해주세요.</h1>
      <div className="options">
        {[1, 2, 3, 4, 5].map((option) => (
          <div
            key={option}
            className={`option ${
              recommendRequest.attractionCount === option ? 'selected' : ''
            }`}
            onClick={() => handleSelect(option)}
          >
            <p className="subtext-context">{option}</p>
          </div>
        ))}
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
