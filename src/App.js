import React, { useState } from 'react';
import Home from './Home';
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import Page3 from './page3/Page3';
import Page4 from './page4/Page4';
import Page5 from './page5/Page5';
import Result from './result/Result';

import useVh from './hooks/useVh';
import './App.css';

const defaultRecommendRequest = {
  attractionCount: 0,
  groupType: '',
  ageGroupStatus: '',
  difficultyLevels: [],
  themeTags: [],
};

const App = () => {
  // useVh 커스텀 훅 호출
  useVh();

  const [pageIndex, setPageIndex] = useState(0);
  const [recommendRequest, setRecommendRequest] = useState(
    defaultRecommendRequest,
  );

  let currentPage = {
    0: <Home pageIndex={pageIndex} setPageIndex={setPageIndex} />,
    1: (
      <Page1
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        recommendRequest={recommendRequest}
        setRecommendRequest={setRecommendRequest}
      />
    ),
    2: (
      <Page2
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        recommendRequest={recommendRequest}
        setRecommendRequest={setRecommendRequest}
      />
    ),
    3: (
      <Page3
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        recommendRequest={recommendRequest}
        setRecommendRequest={setRecommendRequest}
      />
    ),
    4: (
      <Page4
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        recommendRequest={recommendRequest}
        setRecommendRequest={setRecommendRequest}
      />
    ),
    5: (
      <Page5
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        recommendRequest={recommendRequest}
        setRecommendRequest={setRecommendRequest}
      />
    ),
    6: (
      <Result
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        recommendRequest={recommendRequest}
        setRecommendRequest={setRecommendRequest}
        defaultRecommendRequest={defaultRecommendRequest}
      />
    ),
  }[pageIndex];

  
  return (

    <div className="app-container">

      {currentPage}

    </div>

  );
};

export default App;
