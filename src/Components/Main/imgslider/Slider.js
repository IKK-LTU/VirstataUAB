/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import i1 from "./img/trs.jpeg";
import i2 from "./img/aa.jpg";
import i3 from "./img/bb.jpg";
import i4 from "./img/vv.jpg";
import "./Slider.scss";
import "./Slider.css";
import Title from "./Title/Title";

function Slider() {
  let sliderArr = [
    { im: <motion.img src={i1} alt="img1" />, text: <Title /> },
    {
      im: <motion.img src={i3} alt="img3" />,
      text:
        "MISIJA - Kokybiškai, greitai ir profesionaliai teikti paslaugas savo klientams.",
    },
    {
      im: <motion.img src={i2} alt="img2" />,
      text:
        "VIZIJA - Gerinti darbo sąlygas įmonės darbuotojams ir užtikrinti sėkmingą įmonės plėtrą.",
    },
    {
      im: <motion.img src={i4} alt="img4" />,
      text:
        "TIKSLAS - Nuolat tobulinti teikiamų paslaugų ir produkcijos kokybę.",
    },
  ];

  const [x, setX] = useState(0);

  // const goLeft = () => {
  //   console.log(x);
  //   x <= 0 ? setX(0) : setX(x + 100);
  // };

  const goRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  setTimeout(() => {
    goRight();
  }, 2000);

  return (
    <div className="Slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            autoPlay={true}
            key={index}
            className="Slide"
            style={{ transform: `translateX(${x}%)` }}>
            {item.im}
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {item.text}
            </motion.h2>
          </div>
        );
      })}
    </div>
  );
}
export default Slider;
