import React, { Component, useRef, useEffect } from 'react';
import { Route, useRouteMatch, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import classes from './Virstata.css';
import Slider from './imgslider/Slider';
import About from './about/About';
import Services from './services/Services';
import Nav from '../NavigationBar/Nav';
import OurMission from './OurMission/OurMission';
import Certificates from './certificates/certificates';

import im1 from './certificates/Certificates_images/certificate_img.jpg';

gsap.registerPlugin(ScrollTrigger);

function Virstata(props) {
  const CertificateImg = [
    { img: im1, delay: 2 },
    { img: im1, delay: 2.5 },
    { img: im1, delay: 3 },
    { img: im1, delay: 3.5 },
    { img: im1, delay: 4 },
  ];
  const navMeniuStyle = {
    color: '#fff',
  };
  const navStyle = {
    display: 'flex',
    position: 'fixed',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 10px',
    backgroundColor: 'rgba(65, 63, 63, 0.356)',
    zIndex: '1',
    boxShadow: '0 4px 3px 0px rgb(20, 20, 20)',
  };

  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        autoAlpha: 0,
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: 'aa',
          trigger: el,
          start: 'top center+=250',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  //  const scrollToSection = () => {
  //     scroller.scrollTo("#about", {
  //       duration: 800,
  //       delay: 0,
  //       smooth: "easeInOutQuart",
  //     });
  //   };

  const aboutSection = useRef(null);
  const gotoAboutSection = () => window.scrollTo({
    top: aboutSection.current.offsetTop - 140,
    behavior: 'smooth',
  });

  return (
    <div>
      <Nav
        jump={props.jump}
        stylesMeniu={navMeniuStyle}
        styles={navStyle}
      />
      {' '}
      {/* cia butu iskviesta funkcija => gotoAboutSection */}
      <Slider />
      <div ref={addToRefs}>
        <button onClick={gotoAboutSection}>Click to scroll </button>
        {' '}
        {/* per buttona tai veikia gotoAboutSection */}
        <OurMission id="aa" />
      </div>
      <div ref={addToRefs}>
        <Services />
      </div>
      <div ref={aboutSection}>
        <About ref={addToRefs} id="about" />
      </div>
      <div path="/details" ref={addToRefs} className={classes.Certificate}>
        <h2>Sertifikatai</h2>
        <div className={classes.Certificates}>
          {CertificateImg.map((CertificateImg) => <Certificates delay={CertificateImg.delay} CertificateSrc={CertificateImg.img} />)}
        </div>
      </div>
    </div>
  );
}

export default Virstata;
