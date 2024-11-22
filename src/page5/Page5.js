import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopContent = styled.div`
  display: flex;
  padding: 0 1.5rem;
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
`;

const ProgressBar = styled.div`
  width: 40rem;
  height: 0.75rem;
  border-radius: 9999px;
  background: #e5e5e5;

  .progress-bar-fill {
    width: 50%;
    height: 100%;
    border-radius: 9999px;
    background: #58cc02;
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
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
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
`;

const Button = styled(Link)`
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
`;

const Page5 = () => {
  const [badgeActiveList, setBadgeActiveList] = useState([
    { id: 1, name: '인생샷', active: false },
    { id: 2, name: '공포', active: false },
    { id: 3, name: '동심', active: false },
    { id: 4, name: '짜릿함', active: false },
    { id: 5, name: '(여러 개 추가 예정)', active: false },
  ]);

  function handleBadgeClick(badgeId) {
    setBadgeActiveList(
      badgeActiveList.map((badge) =>
        badge.id === badgeId ? { ...badge, active: !badge.active } : badge,
      ),
    );
  }

  return (
    <Container>
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
              {badgeActiveList.map((badge) => (
                <Badge
                  key={badge.id}
                  $variant={badge.active ? 'primary' : ''}
                  onClick={() => handleBadgeClick(badge.id)}
                >
                  {badge.name}
                </Badge>
              ))}
            </BadgeList>
          </InnerContent>
        </Main>
      </TopContent>
      <BottomContent>
        <ButtonWrapper>
          <Button to="/page4">이전</Button>
          <Button to="/page6" $variant="primary">
            다음
          </Button>
        </ButtonWrapper>
      </BottomContent>
    </Container>
  );
};

export default Page5;
