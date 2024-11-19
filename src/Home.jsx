import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    const navigate = useNavigate();
    const handleNext = async () => {
      navigate("/page1");
    };

    return (
        <div className="home">
            <div className="frame">
                <div className="div">
                    <div className="group">
                        <div className="frame-wrapper">
                            <div className="div-wrapper">
                                <img className="logo" alt="OverrideLogo" src="/assets/override_logo.png" />
                            </div>
                        </div>
                    </div>

                    <p className="p">
                        혼자서는 테마파크 일정 짜기가 막막하신가요? <br />
                        우리 모두의 취향을 반영한 코스 짜기, 너무 어려우신가요?
                        <br />
                        <br />단 한 번의 방문도 알차게 취향 저격 맞춤 코스로 시간도 절약하고
                        우리 모두가 즐거운 추억 만들어봐요!
                        <br />
                        친구와 함께, 연인과 함께, 가족과 함께 누구와 와도 모두가 만족하는
                        최적의 코스를 찾아드립니다 ദ്ദി &#40; ᵔ ᗜ ᵔ &#41;
                        <br />
                        <br />더 이상 고민하지 마세요 지금 바로 당신만의 코스를
                        추천받아보세요!
                    </p>
                </div>
            </div>

            <div className="frame-2">
                <button className="next-button" onClick={handleNext}>
                  시작하기
                </button>
            </div>
        </div>
    );
};

export default Home;