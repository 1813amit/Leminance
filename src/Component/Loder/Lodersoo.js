import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, } from 'framer-motion'
import { gsap, CSSPlugin,Expo } from "gsap";
import Loder from "./Loder";
import Home from "../../Pages/Home";
import Landingpagess from "../Home/Landingpagess";
gsap.registerPlugin(CSSPlugin);

function Lodersoo() {
  const [counter, setCounter] = useState(0);


 
  const items = [
    'Welcome To The LAMINANCE KITCHEN',
    'Welcome To The LAMINANCE KITCHEN',
  ];

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 7.2,
      delay: 1,
      marker:true
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
        marker:true
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.7,marker:true })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
        marker:true
      });
  };

  return (
    <AppContainer>
      <Loading>
        <Follow className="follow overflow-hidden"></Follow>
        <Count id="count" className="hide -mt-[500px] ml-[80%]">

          {/* {counter}% */}
        </Count>

        <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center space-y-8">
      {/* Loader Component */}
      <Loder />

      <div className="mb-80 bg-red-600">
      <motion.div
  className="flex whitespace-nowrap overflow-hidden"
  initial={{ x: 0 }}
  animate={{ x: '-100%' }}
  transition={{
    ease: 'linear',
    duration: 20,
    repeat: Infinity,
  }}
>
  {/* First set of items */}
  <div className="flex">
    {items.map((text, index) => (
      <motion.div
        key={`original-${index}`}
        whileHover={{ scale: 1.1 }}
        className="text-6xl md:text-7xl font-extrabold uppercase px-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-orange-300"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {text}
      </motion.div>
    ))}
  </div>

  {/* Duplicate set for seamless looping */}
  <div className="flex">
    {items.map((text, index) => (
      <motion.div
        key={`duplicate-${index}`}
        whileHover={{ scale: 1.1 }}
        className="text-6xl md:text-7xl font-extrabold uppercase px-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-orange-300"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {text}
      </motion.div>
    ))}
  </div>
</motion.div>


      </div>
    </div>
      
          
       
      </Loading>

      <Content className="content">
       
       <Landingpagess />
       
      </Content>
    </AppContainer>
  );
}

export default Lodersoo;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
`;
const Loading = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background-color: #f48049;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  ${'' /* left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
  bottom:100px; */}
`;

const Count = styled.p`
  position: absolute;
  font-size: 80px;
  color: #fff;
  font-weight: 500;

`;

const Content = styled.div`
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  ${'' /* background-color: #121212; */}
  z-index: 2;
  overflow: hidden;
  ${'' /* color: white; */}


`;