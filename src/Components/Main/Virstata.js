import React, { useRef, useEffect, useState } from 'react';
import classes from './Virstata.css';
import Slider from './imgslider/Slider';
import About from './about/About';
import Services from './services/Services';
import Nav from '../NavigationBar/Nav';
import OurMission from './OurMission/OurMission';
import Certificates from './certificates/certificates';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scroller } from "react-scroll";

import im1 from './certificates/Certificates_images/certificate_img.jpg';

gsap.registerPlugin(ScrollTrigger);

function Virstata(props) {

  const CertificateImg = [
    { img: im1, delay: 2 },
    { img: im1, delay: 2.5 },
    { img: im1, delay: 3 },
    { img: im1, delay: 3.5 },
    {img: im1, delay: 4 }
  ]

  const navMeniuStyle = {
    color: '#fff'
  }
  const navStyle = {
    display: 'flex',
    position: 'fixed',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 10px',
    backgroundColor: 'rgba(65, 63, 63, 0.356)',
    zIndex: '1',
    boxShadow: '0 4px 3px 0px rgb(20, 20, 20)',
  }
 
          const headerRef = useRef(null);

          const revealRefs = useRef([]);
          revealRefs.current = [];
        
        
          useEffect(() => {
            gsap.from(headerRef.current, {
              autoAlpha: 0, 
              ease: 'none',
              delay: 1
            });
        
            revealRefs.current.forEach((el, index) => {
                
              gsap.fromTo(el, {
                autoAlpha: 0
              }, {
                duration: 1, 
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                  id: `aa`,
                  trigger: el,
                  start: 'top center+=100',
                  toggleActions: 'play none none reverse'
                }
              });
        
            });
        
          }, []);
        
          const addToRefs = el => {
            if (el && !revealRefs.current.includes(el)) {
                revealRefs.current.push(el);
            }
          };
  
         const scrollToSection = () => {
            scroller.scrollTo("#about", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          };
  
    return (
      <div >
        <Nav scrollToSection={props.scroll} stylesMeniu={navMeniuStyle} styles={navStyle}/>
        <Slider />
        <div ref={addToRefs}>
        <OurMission id="aa" ref={addToRefs} />
        </div>
          <Services />
        <About id="about" />
        <div className={classes.Certificates}>
            {CertificateImg.map(CertificateImg => {
              return <Certificates delay={CertificateImg.delay}  CertificateSrc={CertificateImg.img}  />
            })}
          </div>
      </div>
    );
}
export default Virstata;