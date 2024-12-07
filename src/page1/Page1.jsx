import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';

const Page1 = ({
  pageIndex,
  setPageIndex,
  recommendRequest,
  setRecommendRequest,
}) => {
  // 문자열로 되어 있는 startTime, endTime을 Date 객체로 변환
  const initialStart = recommendRequest.startTime 
    ? new Date(`1970-01-01T${recommendRequest.startTime}:00`)
    : new Date('1970-01-01T10:00:00');
  
  const initialEnd = recommendRequest.endTime 
    ? new Date(`1970-01-01T${recommendRequest.endTime}:00`)
    : new Date('1970-01-01T22:00:00');

  const [startTime, setStartTime] = useState(initialStart);
  const [endTime, setEndTime] = useState(initialEnd);

  // HH:mm 포맷팅 함수
  const formatTime = (date) => {
    if (!date || isNaN(date.getTime())) return '';
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const isInvalidRange = startTime && endTime && startTime >= endTime;

  const handleNext = () => {
    if (isInvalidRange) {
      alert('퇴장 시각은 입장 시각보다 늦은 시간이어야 합니다.');
    } else {
      setRecommendRequest({ 
        ...recommendRequest, 
        startTime: formatTime(startTime), 
        endTime: formatTime(endTime)
      });
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrevious = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="container">
        <style>
          {`
            .time-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 50px;
            }

            .time-inputs {
              display: flex;
              flex-direction: row;
              gap: 50px;
              margin-bottom: 20px;
            }

            .time-input-block {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .time-input-block label {
              font-size: 1.2rem;
              margin-bottom: 8px;
              font-weight: 500;
            }

            .error {
              margin-top: 20px;
              color: red;
            }

          `}
        </style>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(1 / 6) * 100}%` }}></div>
        </div>
        <h1>놀이공원을 즐길 시간대를 입력해주세요.</h1>
        <p className="subtext"> 롯데월드 운영시간 : 10:00 AM ~ 10:00 PM </p>
        <div className="time-container">
          <div className="time-inputs">
            <div className="time-input-block">
              <label htmlFor="startTime">입장 시각</label>
              <TimePicker
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
                minTime={new Date(0,0,0,10,0)}  // 10:00
                maxTime={new Date(0,0,0,22,0)}  // 22:00
              />
            </div>
            <div className="time-input-block">
              <label htmlFor="endTime">퇴장 시각</label>
              <TimePicker
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
                minTime={new Date(0,0,0,10,0)}
                maxTime={new Date(0,0,0,22,0)}
              />
            </div>
          </div>
          {isInvalidRange && <p className="error">퇴장 시각은 입장 시각보다 늦은 시간이어야 합니다.</p>}
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
    </LocalizationProvider>
  );
};

export default Page1;
