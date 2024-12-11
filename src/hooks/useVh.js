// src/hooks/useVh.js
import { useEffect } from 'react';

const useVh = () => {
  useEffect(() => {
    // 서버 사이드 렌더링(SSR) 환경에서 window 객체가 있는지 확인
    if (typeof window === 'undefined') return;

    // 뷰포트 높이를 계산하여 CSS 변수에 설정하는 함수
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 초기 설정
    setVh();

    // 이벤트 리스너 추가: 창 크기 변경 시 재계산
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh); // 모바일 기기 방향 전환 시 재계산

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);
};

export default useVh;
