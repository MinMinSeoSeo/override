const Page2 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  const handleSelect = (option) => {
    setRecommendRequest({ ...recommendRequest, groupType: option });
  };

  const handleNext = async () => {
    if (recommendRequest.groupType !== '') {
      setPageIndex(pageIndex + 1);
    } else {
      alert('인원 형태를 선택해주세요!');
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
        <div className="progress" style={{ width: `${(2 / 6) * 100}%` }}></div>
      </div>
      <h1>인원 형태를 입력해주세요.</h1>
      <p className="subtext">가족 / 친구 / 연인 / 혼자 </p>
      <div className="options" style={{ gap: '20px' }}>
        <div
          className={`option ${
            recommendRequest.groupType === 'family' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('family')}
        >
          <img src="/assets/family.png" alt="가족" />
          <p className="subtext-context">가족</p>
        </div>
        <div
          className={`option ${
            recommendRequest.groupType === 'friends' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('friends')}
        >
          <img src="/assets/couple.png" alt="연인" />
          <p className="subtext-context">연인</p>
        </div>
        <div
          className={`option ${
            recommendRequest.groupType === 'couple' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('couple')}
        >
          <img src="/assets/friend.png" alt="친구" />
          <p className="subtext-context">친구</p>
        </div>
        <div
          className={`option ${
            recommendRequest.groupType === 'solo' ? 'selected' : ''
          }`}
          onClick={() => handleSelect('solo')}
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
