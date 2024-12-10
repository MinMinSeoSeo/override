import '../page1_4.css';
import './page4.css';
import { Helmet } from 'react-helmet';

const Page4 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  const difficultyLevels = recommendRequest.difficultyLevels;

  const levelSort = (originalList) => {
    const levelIndex = { 'low': 1, 'medium': 2, 'high': 3 };
    return originalList.sort((a, b) => levelIndex[a] - levelIndex[b]);
  };  

  const handleSelect = (option) => {
    let newDifficultyLevels = [];

    if (difficultyLevels.includes(option)) {
      if (difficultyLevels.length === 3 && option === 'medium') {
        newDifficultyLevels = [option];
      } else {
        newDifficultyLevels = difficultyLevels.filter((o) => o !== option);
      }
    } else {
      if (
        difficultyLevels.length === 1 &&
        (difficultyLevels[0] !== 'medium' && option !== 'medium')
      ) {
        newDifficultyLevels = ['low', 'medium', 'high'];
      } else {
        newDifficultyLevels = levelSort([...difficultyLevels, option]);
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
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
      </Helmet>
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
