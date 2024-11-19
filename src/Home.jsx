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
                    혼자서 테마파크 일정짜기 막막하신 여러분!<br />
                    여러분의 취향을 입력하고 당신만의 코스를 추천받아보세요!
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