// src/hooks/useVh.js
import { useEffect } from 'react';

const useVh = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      // 모바일 Safari 등에서 visualViewport 사용
      if (window.visualViewport) {
        vh = window.visualViewport.height * 0.01;
      }
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 초기 설정
    setVh();

    // 이벤트 리스너 추가
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVh);
      window.visualViewport.addEventListener('scroll', setVh);
    }

    // 클린업 함수
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);

      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVh);
        window.visualViewport.removeEventListener('scroll', setVh);
      }
    };
  }, []);
};

export default useVh;
