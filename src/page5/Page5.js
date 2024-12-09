import styled from 'styled-components';

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
  flex-wrap: wrap;
  gap: 0.75rem;
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
  const badgeList = ['인생샷', '공포', '동심', '짜릿함'];

  function handleBadgeClick(badge) {
    setRecommendRequest({
      ...recommendRequest,
      themeTags: recommendRequest.themeTags.includes(badge)
        ? recommendRequest.themeTags.filter((tag) => tag !== badge)
        : [...recommendRequest.themeTags, badge],
    });
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
              {badgeList.map((badge, index) => (
                <Badge
                  key={index}
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
