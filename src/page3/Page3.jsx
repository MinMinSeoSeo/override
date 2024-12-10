import { Helmet } from 'react-helmet';

const Page3 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  const handleSelect = (option) => {
    setRecommendRequest({ ...recommendRequest, ageGroupStatus: option });
  };

  const handleNext = async () => {
    if (recommendRequest.ageGroupStatus !== '') {
      setPageIndex(pageIndex + 1);
    } else {
      alert('아이나 고령자 여부를 선택해주세요!');
    }
  };

  const handlePrevious = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <div className="container">
      <style>
        {`
          @media (max-width: 767px) {
            .options {
              display: grid;
              grid-template-columns: repeat(2, 1fr); 
              gap: 20px;
              justify-content: center;
            }
            .option {
              width: 120px;
              height: 140px;
            }
          }
        `}
      </style>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(3 / 6) * 100}%` }}></div>
      </div>
      <h1>구성원 중에 아이나 고령자가 있나요?</h1>
      <p className="subtext">아이 - 12세 이하 / 고령자 - 65세 이상</p>
      <div className="options" style={{ gap: '20px' }}>
        <div
          className={`option ${
            recommendRequest.ageGroupStatus === 'elderly' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('elderly')}
        >
          <img src="/assets/grandma.svg" alt="고령자도 있어요" />
          <p className="subtext-context">고령자도 있어요</p>
        </div>
        <div
          className={`option ${
            recommendRequest.ageGroupStatus === 'child' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('child')}
        >
          <img src="/assets/boy.svg" alt="아이만 있어요" />
          <p className="subtext-context">아이만 있어요</p>
        </div>
        <div
          className={`option ${
            recommendRequest.ageGroupStatus === 'both' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('both')}
        >
          <img id="img3" src="/assets/family.svg" alt="둘 다 있어요" />
          <p className="subtext-context">둘 다 있어요</p>
        </div>
        <div
          className={`option ${
            recommendRequest.ageGroupStatus === 'none' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('none')}
        >
          <img src="/assets/free.svg" alt="둘 다 없어요" />
          <p className="subtext-context">둘 다 없어요</p>
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
