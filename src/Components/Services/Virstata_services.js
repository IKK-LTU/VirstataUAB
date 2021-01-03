import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import 'react-image-lightbox/style.css'
import classes from './Virstata_services.css'
import Nav from '../NavigationBar/Nav'
import ImageGrid from './servicesGallery/ImageGrid'
import BetonavimasImg from './servicesGallery/Images/Betonavimas/BetonavimasImg'
import IvairusApdailosDarbai from './servicesGallery/Images/Ivairus_apdailos_darbai/IvairusApdailosDarbai'
import TerasosPavesinesImg from './servicesGallery/Images/Terasos_pavesines/TerasosPavesinesImg'
import TrinkeliuKlojimasImg from './servicesGallery/Images/Trinkeliu_klojimas/TrinkeliuKlojimasImg'
import TvorosVartaiImg from './servicesGallery/Images/Tvoros_vartai/TvorosVartaiImg'

import im1 from './servicesGallery/Images/betonavimas.jpg'
import im2 from './servicesGallery/Images/apdaila.jpg'
import im3 from './servicesGallery/Images/terasa.jpg'
import im4 from './servicesGallery/Images/trinkeles.jpg'
import im5 from './servicesGallery/Images/tvora.jpg'


function VirstataServices() {
  const Services = [
    {
      id: '0',
      imagess: BetonavimasImg,
      title: 'Betonavimo darbai',
      description:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      background: im1,
    },
    {
      id: '1',
      imagess: IvairusApdailosDarbai,
      title: 'Apdailos Darbai',
      description: 'bb',
      background: im2,
    },
    {
      id: '2',
      imagess: TerasosPavesinesImg,
      title: 'Terasos ir Pavesinės',
      description: 'cc',
      background: im3,
    },
    {
      id: '3',
      imagess: TrinkeliuKlojimasImg,
      title: 'Trinkelių Klojimas',
      description: 'dd',
      background: im4,
    },
    {
      id: '4',
      imagess: TvorosVartaiImg,
      title: 'Tvoros ir Vartai',
      description: 'dd',
      background: im5,
    },
  ]
  const [setSelectedImg] = useState(null)

  const [ active, setActive ] = useState(0)
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
  const aboutSection = useRef(null)
  function handleIdChange(e) {
      window.scrollTo({
        top: aboutSection.current.offsetTop - 40,
        behavior: 'smooth',
      })
    setActive(e.target.id)
    return setActive(e.target.id)
  }

  
    return (
      <div style={{ margin: 0 }}>
        <Nav style={{ display: 'fix' }} />
        <h2 style={{ textTransform: 'uppercase', textAlign: 'center' }}>Pasirinkite paslaugą</h2>
        <div className={classes.Filter}>
          {/* // eslint-disable-next-line no-shadow */}
          {Services.map((Servicees) => (
            <div
              className={classes.Filter_Item}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(${Servicees.background})`,
              }}
              id={Servicees.id}
              key={Servicees.id}
              onClick={handleIdChange}
              role="button"
              onKeyDown={handleIdChange}
              tabIndex={0}
            >
              {Servicees.title}
            </div>
          ))}
        </div>

        <div ref={aboutSection} className={classes.servicees}>
          <ImageGrid
            titlee={Services[active].title}
            description={Services[active].description}
            items={Services[active].imagess}
            setSelectedImg={setSelectedImg}
            ref={addToRefs}
          />
        </div>
      </div>
    )
}
export default VirstataServices
