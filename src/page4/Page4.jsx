import '../page1_4.css';
import './page4.css';

const Page4 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  const difficultyLevels = recommendRequest.difficultyLevels;

  const handleSelect = (option) => {
    let newDifficultyLevels = [];

    if (difficultyLevels.includes(option)) {
      // 이미 선택된 옵션을 클릭한 경우
      if (difficultyLevels.length === 'high' && option === 'medium') {
        // (예외 처리) 하, 중, 상이 모두 선택된 상황 => 중 클릭 => 중만 선택되도록 (나머지는 선택 해제)
        newDifficultyLevels = [option];
      } else {
        // 그 외 경우엔, 정상적으로 클릭한 옵션에 대해 선택 해제 실행
        newDifficultyLevels = difficultyLevels.filter((o) => o !== option);
      }
    } else {
      // 새로운(선택되지 않은) 옵션을 클릭한 경우
      if (
        difficultyLevels.length === 'low' &&
        Math.abs(difficultyLevels[0] - option) === 'medium'
      ) {
        // 하를 선택한 상황에서 상을 선택하거나, 상을 선택한 상황에서 하를 선택한 경우 => 하, 중, 상 모두 선택되도록
        newDifficultyLevels = [('low', 'medium', 'high')];
      } else {
        // 선택한 옵션 추가
        newDifficultyLevels = [...difficultyLevels, option].sort();
      }
    }

    setRecommendRequest({
      ...recommendRequest,
      difficultyLevels: newDifficultyLevels,
    });
  };

  const handleNext = async () => {
    if (difficultyLevels.length > 0) {
      setPageIndex(pageIndex + 1);
    } else {
      alert('난이도를 선택해주세요!');
    }
  };

  const handlePrevious = () => {
    setPageIndex(pageIndex - 1);
  };

  const getRoundBoundaryLeft = () => {
    if (difficultyLevels.includes('low')) {
      return '0px';
    } else if (difficultyLevels.includes('medium')) {
      return '150px';
    } else {
      return '300px';
    }
  };

  const getRoundBoundaryRight = () => {
    if (difficultyLevels.includes('high')) {
      return '0px';
    } else if (difficultyLevels.includes('medium')) {
      return '150px';
    } else {
      return '300px';
    }
  };

  const getRoundBoundaryVisibility = () => {
    return difficultyLevels.length > 0 ? 'visible' : 'invisible';
  };

  return (
    <div className="container">
      <style>
        {`
          .options {
            position: relative;
            justify-content: center;
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
        <div className="progress" style={{ width: `${(4 / 6) * 100}%` }}></div>
      </div>
      <h1>원하는 놀이기구의 난이도를 선택해주세요</h1>
      <p className="subtext">하 / 중 / 상 (중복 선택 가능)</p>
      <div className="options">
        <div id="boundary">
          <div
            id="round-boundary"
            className={getRoundBoundaryVisibility()}
            style={{
              left: getRoundBoundaryLeft(),
              right: getRoundBoundaryRight(),
            }}
          ></div>
        </div>
        <div
          className={`option ${
            difficultyLevels.includes('low') ? 'selected' : ''
          }`}
          onClick={() => handleSelect('low')}
        >
          <p className="subtext-context">하</p>
        </div>
        <div
          className={`option ${
            difficultyLevels.includes('medium') ? 'selected' : ''
          }`}
          onClick={() => handleSelect('medium')}
        >
          <p className="subtext-context">중</p>
        </div>
        <div
          className={`option ${
            difficultyLevels.includes('high') ? 'selected' : ''
          }`}
          onClick={() => handleSelect('high')}
        >
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
