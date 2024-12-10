import React, { useEffect, useState } from 'react';
import '../page1_4.css';
import './result.css';
import AttractionCard from '../components/AttractionCard';
import { recommendAttractionsApi } from '../api/attraction';
import { Helmet } from 'react-helmet';

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
    setPageIndex(0);
  }

  function handlePrevious() {
    setPageIndex(pageIndex - 1);
  }

  useEffect(() => {
    async function fetchData() {
      //alert(JSON.stringify(recommendRequest));
      const data = await recommendAttractionsApi(recommendRequest);

      if (data) { //if문 추가 -> Home버튼 눌렀을 때 발생하는 오류 해결 (data가 none이어서 속성을 추출 못하며 오류 발생)
        setAttractionGroups(data.attractionGroups);
      }
    }
    fetchData();
  }, [recommendRequest]);

  return (
    <div className="container">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
      </Helmet>
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
        <button className="prev-button" onClick={handlePrevious}>
          이전
        </button>
        <button className="next-button" onClick={handleHomeButtonClick}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Result;
