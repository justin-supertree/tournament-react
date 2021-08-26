import React, { useState, useEffect } from "react";
import ContinueSlide from "./box/ContinueSlide";
import LiveSlide from "./box/LiveSlide";
import MissionSlide from "./box/MissionSlide";
import GameItem from "./box/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.css";
import Modal from "./modal/Modal";
import bulso from "./resource/video/bulso.mp4";

const Main = () => {
  const [gameData, setGameData] = useState([]);
  const typeData = [
    {
      id: 1,
      title: "Continue Playing",
      route: "option",
      slide: <ContinueSlide />,
    },
    {
      id: 2,
      title: "Weekly Mission",
      route: "See All",
      slide: <MissionSlide />,
    },
  ];

  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  // const renNumber = AddComma(Math.floor(Math.random() * 100000));
  // const renPoint = AddComma(Math.floor(Math.random() * 10000000));
  // console.log(renNumber);
  // console.log(gameData);

  const [show, setShow] = useState(false);
  const closeHandle = (event) => {
    event.preventDefault();
    setShow(false);
    console.log("close modal");
  };
  const openHandle = () => {
    setShow(!show);
    console.log("open modal");
  };

  // useEffect(() => {
  //   if (show) {
  //     const notice = setTimeout(() => {
  //       setShow(false);
  //     }, 3000);
  //     return () => clearTimeout(notice);
  //   }
  // }, [show]);

  useEffect(() => {
    for (var i = 0; i < 5; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = AddComma(Math.floor(Math.random() * 10000000));
      const people = AddComma(Math.floor(Math.random() * 100000));
      const menuDatas = {
        img: count,
        point: num,
        user: people,
      };

      setGameData(menuDatas);
      console.log(menuDatas);
      // gameData.forEach((info) => console.log(info));
    }
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <header>
            <NaviBar />
          </header>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "lightgray",
              borderRadius: 20,
              padding: 15,
              border: "none",
              color: "#fff",
              fontSize: 20,
              fontWeight: "border",
              width: "50%",
            }}
            onClick={openHandle}
          >
            test modal
          </div>
          <div
            style={{
              // position: "absolute",
              width: "100%",
              height: 350,
              left: 0,
              zIndex: 0,
              opacity: 0.3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <video
              autoPlay
              loop
              muted
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={bulso} type="video/mp4" />
            </video> */}
            <div className="scene">
              <div className="cube">
                <div className="cube__face cube__face--front">front</div>
                <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">right</div>
                <div className="cube__face cube__face--left">left</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">bottom</div>
              </div>
            </div>
          </div>
          {/* LiveSlide */}
          <div className="main-live-wrapper">
            <LiveSlide />
          </div>
          {/* Continue Playing */}
          {/* Weekly Mission */}
          {typeData.map((info) => (
            <>
              <div className="slide-contianer">
                <div className="slide-wrapper">
                  <div className="slide-space">
                    <div className="slide-title-wrapper">
                      {/* Continue Playing */}
                      <span className="slide-title">{info.title}</span>
                      {/* option */}
                      <span className="slide-route">{info.route}</span>
                    </div>
                    {info.id === 2 && (
                      <>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h3
                            style={{
                              fontSize: 32,
                              fontWeight: "bold",
                              color: "#09607b",
                              margin: "12px 0",
                            }}
                          >
                            You Won
                          </h3>
                          <span
                            style={{
                              width: 34,
                              height: 34,
                              border: "solid 1.5px #149231",
                              backgroundColor: "#38ae53",
                              margin: " 0 10px",
                              color: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 25,
                            }}
                          >
                            <p
                              style={{
                                margin: "auto",
                                fontSize: 22,
                                fontWeight: 800,
                                display: "flex",
                                height: "88%",
                                alignItems: "flex-end",
                              }}
                            >
                              PP
                            </p>
                          </span>
                          <div
                            style={{
                              fontSize: 32,
                              fontWeight: "bold",
                              color: "#09607b",
                            }}
                          >
                            0/20
                          </div>
                        </div>
                        <div
                          style={{ height: 12, backgroundColor: "#d8d8d8" }}
                        />
                      </>
                    )}
                  </div>
                  <div className="slide-area">{info.slide}</div>
                  {info.id === 2 && (
                    <h2 className="weekly-daycount">6 days left to complet</h2>
                  )}
                </div>
              </div>
            </>
          ))}
          {/* Featured Tournament */}
          <div className="featured-container">
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 30px",
                }}
              >
                <p className="featured-title">Featured Tournaments</p>
                {/* big img area */}
                <img className="featured-img" alt="" />
                <div className="featured-infoarea">
                  <span>PP</span>
                  <div>
                    <span>num</span>
                    <span>notice</span>
                  </div>
                </div>
                {/* small img area */}
                <div className="featured-smallarea">
                  <div className="featured-samll-wrapper">
                    <div className="featured-samll-img" alt="1" />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <span>PP</span>
                      </div>
                      <div>
                        <span>num</span>
                        <span>notice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide menu */}
          <div className="menu-container">
            <span
              className="menu-selector"
              style={{ backgroundColor: "#9bd0e1", color: "#fff" }}
            >
              All Games
            </span>
            <span
              className="menu-selector"
              style={{
                backgroundColor: "#fff",
                border: "solid 2.5px #77b5c9",
                color: "#77b5c9",
              }}
            >
              New Arrival
            </span>
          </div>
          <div
            style={{
              padding: "0 30px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {/* <GameItem menuData={gameData} /> */}
            </div>
          </div>
          <div
            style={{
              fontFamily: "AppleSDGothicNeo",
              color: "#598b9b",
              padding: "70px 0",
              fontSize: 38,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            View All Games
          </div>
        </div>
        {show === true && (
          <>
            <div>
              <Modal show={show} closeModal={closeHandle} />
              {/* <div
                style={{
                  position: "absolute",
                  zIndex: 101,
                  width: 80,
                  height: 50,
                  border: "1px solid",
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={closeHandle}
              >
                close
              </div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
