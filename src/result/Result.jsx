import React, { useEffect, useState } from 'react';
import '../page1_4.css';
import './result.css';
import AttractionCard from '../components/AttractionCard';
import { recommendAttractionsApi } from '../api/attraction';

const Result = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
  defaultRecommendRequest,
}) => {
  const [displayedCombos, setDisplayedCombos] = useState(2);
  const [attractionGroups, setAttractionGroups] = useState([]);
  const [isDisplayedMore, setIsMore] = useState(false);

  const shortedDisplayCount = 2;
  const expanedDisplayCount = 5;

  const handleMoreCombos = () => {
    setDisplayedCombos(
      isDisplayedMore ? shortedDisplayCount : expanedDisplayCount,
    );
    setIsMore(!isDisplayedMore);
  };

  function handleHomeButtonClick() {
    setRecommendRequest(defaultRecommendRequest);
  }

  function handlePrevious() {
    setPageIndex(pageIndex - 1);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await recommendAttractionsApi(recommendRequest);

      setAttractionGroups(data.attractionGroups);
    }
    fetchData();
  }, [recommendRequest]);

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress" style={{ width: '100%' }}></div>
      </div>
      <h1>놀이기구 추천 조합을 확인해보세요!</h1>
      <p className="subtext">각 카드를 클릭해보세요☺︎</p>
      <div className="combos">
        {attractionGroups
          .slice(0, displayedCombos)
          .map((attractionGroup, attractionGroupIndex) => (
            <div key={attractionGroupIndex} className="combo-container">
              <div className="combo-label">
                {String.fromCharCode(65 + attractionGroupIndex)}
              </div>
              <div className="combo-box">
                <div className="items-wrapper">
                  {attractionGroup.attractions.map(
                    (attraction, attractionIndex) => (
                      <AttractionCard
                        key={attractionIndex}
                        attraction={attraction}
                        attractionIndex={attractionIndex}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      <button className="more-btn" onClick={handleMoreCombos}>
        {isDisplayedMore ? '접기' : '더보기'}
      </button>
      <div className="navigation">
        <button className="prev-button" onClick={handleHomeButtonClick}>
          이전
        </button>
        <button className="next-button" onClick={handlePrevious}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Result;
