import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopContent = styled.div`
  display: flex;
  padding: 20px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  padding-top: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 40rem;
  height: 5px;
  border-radius: 9999px;
  background: #ddd;

  .progress-bar-fill {
    width: ${(5 / 6) * 100}%;
    height: 100%;
    border-radius: 9999px;
    background: #58cc02;
  }
  @media (max-width: 767px) {
    width: 90%;
    height: 4px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
  @media (max-width: 767px) {
      font-size: 1.4rem; 
      margin-bottom: 10px; 
  }
`;

const BadgeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 80%;
  max-width: 60rem;
  @media (max-width: 767px) {
    width: 80%;
  }
`;

const Badge = styled.div`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  padding: 0.25rem 0.75rem;
  color: ${(props) => (props.$variant === 'primary' ? '#227922' : '#4B4B4B')};
  border-radius: 9999px;
  border: 2px solid
    ${(props) => (props.$variant === 'primary' ? '#4CAF50' : '#E5E5E5')};
  background: ${(props) =>
    props.$variant === 'primary' ? '#F0F8F0' : '#FFFFFF'};
  cursor: pointer;
  align-items: center;
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const AddBadge = styled(Badge)`
  background: #e0e0e0;
  border: 2px dashed #a0a0a0;
  color: #555555;
  cursor: pointer;
  padding-top: 0.03rem;
  padding-left: 0.45rem;
  padding-right: 0.45rem;
`;

const InputBadge = styled.input`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 2px solid #4CAF50;
  background: #FFFFFF;
  outline: none;
  width: auto;
  min-width: 5rem;
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const BottomContent = styled.div`
  display: flex;
  padding: 3rem 2rem;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e5e5e5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 48rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: center;
    gap: min(32rem, calc(100vw - 20rem));
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 8rem;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid
    ${(props) => (props.$variant === 'primary' ? '#85e478' : '#E1E1E1')};
  background: ${(props) =>
    props.$variant === 'primary' ? '#42C62F' : '#FFFFFF'};
  color: ${(props) => (props.$variant === 'primary' ? '#FFFFFF' : '#A6A6A6')};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1rem;
  cursor: pointer;
  @media (max-width: 767px) {
    max-width: 6rem;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
`;

const Page5 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  const [badgeList, setBadgeList] = useState([
    '짜릿함', '동심', '공포', '인생샷', '모험', '속도감', '고공(높이)',
    '캐릭터', '회전', '화려함', '감상', '활동/체험', '첨단기술',
    '몽환', '인기', '야외', '실내', '다같이', '데이트'
  ]);
  
  // 추가된 태그 입력 상태
  const [isAdding, setIsAdding] = useState(false);
  const [newBadge, setNewBadge] = useState('');
  const [error, setError] = useState(''); // 중복 태그 에러 메시지 상태

  function handleBadgeClick(badge) {
    setRecommendRequest({
      ...recommendRequest,
      themeTags: recommendRequest.themeTags.includes(badge)
        ? recommendRequest.themeTags.filter((tag) => tag !== badge)
        : [...recommendRequest.themeTags, badge],
    });
  }

  function handleAddBadge() {
    setIsAdding(true);
    setError('');
  }

  function handleInputChange(e) {
    setNewBadge(e.target.value);
    if (error) setError('');
  }

  function handleInputSubmit(e) {
    e.preventDefault();
    const trimmedBadge = newBadge.trim();
    if (!trimmedBadge) {
      setError('태그를 입력해주세요.');
      return;
    }
    if (badgeList.includes(trimmedBadge)) {
      setError('이미 존재하는 태그입니다.');
      return;
    }
    setBadgeList([...badgeList, trimmedBadge]);
    setRecommendRequest({
      ...recommendRequest,
      themeTags: [...recommendRequest.themeTags, trimmedBadge],
    });
    setNewBadge('');
    setIsAdding(false);
  }

  function handleNext() {
    setPageIndex(pageIndex + 1);
  }

  function handlePrevious() {
    setPageIndex(pageIndex - 1);
  }

  return (
    <Container>
      <style>
        {`
          html, body {
            min-width: 513px;
            overflow-x: hidden; 
          }
          @media (max-width: 767px) {
            .progress-bar {
              width: 90%; /* 모바일에서 폭 축소 */
              height: 4px; /* 모바일에서 높이 축소 */
            }
      
            h1 {
              font-size: 1.4rem; /* 모바일에서 폰트 크기 축소 */
              margin-bottom: 10px; /* 하단 여백 축소 */
            }
          }
        `}
      </style>
      <TopContent>
        <Header>
          <ProgressBar>
            <div className="progress-bar-fill" />
          </ProgressBar>
        </Header>
        <Main>
          <InnerContent>
            <Heading>경험하고 싶은 테마가 있다면 모두 선택해주세요.</Heading>
            <BadgeList>
              {badgeList.map((badge) => (
                <Badge
                  key={badge}
                  $variant={
                    recommendRequest.themeTags.includes(badge)
                      ? 'primary'
                      : 'default'
                  }
                  onClick={() => handleBadgeClick(badge)}
                >
                  {badge}
                </Badge>
              ))}
              {!isAdding && (
                <AddBadge onClick={handleAddBadge}>
                  +
                </AddBadge>
              )}
              {isAdding && (
                <form onSubmit={handleInputSubmit}>
                  <InputBadge
                    type="text"
                    value={newBadge}
                    onChange={handleInputChange}
                    autoFocus
                    placeholder="태그 입력"
                    onBlur={() => {
                      setIsAdding(false);
                      setNewBadge('');
                      setError('');
                    }}
                  />
                  {error && <span style={{ color: 'red', marginLeft: '0.5rem' }}>{error}</span>}
                </form>
              )}
            </BadgeList>
          </InnerContent>
        </Main>
      </TopContent>
      <BottomContent>
        <ButtonWrapper>
          <Button onClick={handlePrevious}>이전</Button>
          <Button $variant="primary" onClick={handleNext}>
            다음
          </Button>
        </ButtonWrapper>
      </BottomContent>
    </Container>
  );
};

export default Page5;
