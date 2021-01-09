import React, { useRef, useEffect, useState  } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import classes from './Virstata.css'
import Slider from './imgslider/Slider'
import About from './about/About'
import Services from './services/Services'
import Nav from '../NavigationBar/Nav'
import OurMission from './OurMission/OurMission'
import Certificates from './certificates/certificates'
import SideDrawer from '../NavigationBar/mobile/SideDrawer'
import BackDrop from '../NavigationBar/mobile/Backdrop/BackDrop'

import im1 from './certificates/Certificates_images/certificate_img.jpg'

gsap.registerPlugin(ScrollTrigger)

function Virstata() {

   

  const CertificateImg = [
    { img: im1, delay: 2, id: 1 },
    { img: im1, delay: 2.5, id: 2 },
    { img: im1, delay: 3, id: 3 },
    { img: im1, delay: 3.5, id: 4 },
    { img: im1, delay: 4, id: 5 },
  ]


  const headerRef = useRef(null)

  const revealRefs = useRef([])
  revealRefs.current = []

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    })

    // eslint-disable-next-line no-unused-vars
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          
          scrollTrigger: {
            id: 'aa',
            trigger: el,
            start: 'top center+=250',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  } 

  // MObile Meniu Listener

  const [sideDrawerClose, sideDrawerOpen] = useState(false)
 const mobileMenu = () => sideDrawerOpen(!sideDrawerClose)

  
  const aboutSection = useRef(null)
  
  const gotoAboutSection = () =>
    window.scrollTo({
      top: aboutSection.current.offsetTop - 10,
      behavior: 'smooth',
      delay: 1 ,
    })
  
  return (
    <div key={CertificateImg.id}>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#544c4c" />
      {sideDrawerClose && <SideDrawer clicked={() => sideDrawerOpen(!sideDrawerClose)} />}
      {sideDrawerClose && <BackDrop clicked={() => sideDrawerOpen(!sideDrawerClose)} />}
      <Nav OpenMobileMenu={mobileMenu} styles={{ position: 'fixed' }} jump={gotoAboutSection} />
      <Slider />
      <div ref={addToRefs}>
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
          {CertificateImg.map((CertificateImgg) => (
            <Certificates
              key={CertificateImgg.id}
              delay={CertificateImgg.delay}
              CertificateSrc={CertificateImgg.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Virstata
