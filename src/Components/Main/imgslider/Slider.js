import React, { useState } from 'react'
import { motion } from 'framer-motion'
import i1 from './img/trs.jpeg'
import i2 from './img/aa.jpg'
import i3 from './img/bb.jpg'
import i4 from './img/vv.jpg'
import './Slider.scss'
import './Slider.css'
import Title from './Title/Title'

function Slider() {
  const sliderArr = [
    { im: <motion.img src={i1} alt="img1" />, title: <Title />, id: 1 },
    {
      im: <motion.img src={i3} alt="img3" />,
      title: 'MISIJA!',
      description: 'Kokybiškai, greitai ir profesionaliai teikti paslaugas savo klientams.',

      id: 2,
    },
    {
      im: <motion.img src={i2} alt="img2" />,
      title: 'VIZIJA!',
      description:
        'Gerinti darbo sąlygas įmonės darbuotojams ir užtikrinti sėkmingą įmonės plėtrą.',
      id: 3,
    },
    {
      im: <motion.img src={i4} alt="img4" />,
      title: 'TIKSLAS!',
      description: 'Nuolat tobulinti teikiamų paslaugų ir produkcijos kokybę.',
      id: 4,
    },
  ]

  const [x, setX] = useState(0)

  // const goLeft = () => {
  //   console.log(x);
  //   x <= 0 ? setX(0) : setX(x + 100);
  // };

  const goRight = () => (x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100))

  setTimeout(() => {
    goRight()
  }, 4000)

  return (
    <div className="Slider">
      {sliderArr.map((item) => (
        <div
          autoPlay
          key={sliderArr.id}
          className="Slide"
          style={{ transform: `translateX(${x}%)`, textAlign: 'left', letterSpacing: '1 px' }}
        >
          {item.im}
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ textAlign: 'center', letterSpacing: '1.5 px' }}
          >
            {item.title}
          </motion.h2>
          <br />
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {item.description}
          </motion.h3>
        </div>
      ))}
    </div>
  )
}
export default Slider
