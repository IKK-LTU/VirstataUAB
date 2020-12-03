<<<<<<< HEAD
/** @format */

import React, { useState } from "react";
import "react-image-lightbox/style.css";
import classes from "./Virstata_services.css";
import Nav from "../NavigationBar/Nav";
import ImageGrid from "./servicesGallery/ImageGrid";
import BetonavimasImg from "./servicesGallery/Images/Betonavimas/BetonavimasImg";
import IvairusApdailosDarbai from "./servicesGallery/Images/Ivairus_apdailos_darbai/IvairusApdailosDarbai";
import TerasosPavesinesImg from "./servicesGallery/Images/Terasos_pavesines/TerasosPavesinesImg";
import TrinkeliuKlojimasImg from "./servicesGallery/Images/Trinkeliu_klojimas/TrinkeliuKlojimasImg";
import TvorosVartaiImg from "./servicesGallery/Images/Tvoros_vartai/TvorosVartaiImg";
=======
import React, { useState } from 'react'
import 'react-image-lightbox/style.css'
import classes from './Virstata_services.css'
import Nav from '../NavigationBar/Nav'
import ImageGrid from './servicesGallery/ImageGrid'
import BetonavimasImg from './servicesGallery/Images/Betonavimas/BetonavimasImg'
import IvairusApdailosDarbai from './servicesGallery/Images/Ivairus_apdailos_darbai/IvairusApdailosDarbai'
import TerasosPavesinesImg from './servicesGallery/Images/Terasos_pavesines/TerasosPavesinesImg'
import TrinkeliuKlojimasImg from './servicesGallery/Images/Trinkeliu_klojimas/TrinkeliuKlojimasImg'
import TvorosVartaiImg from './servicesGallery/Images/Tvoros_vartai/TvorosVartaiImg'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

import im1 from './servicesGallery/Images/betonavimas.jpg'
import im2 from './servicesGallery/Images/apdaila.jpg'
import im3 from './servicesGallery/Images/terasa.jpg'
import im4 from './servicesGallery/Images/trinkeles.jpg'
import im5 from './servicesGallery/Images/tvora.jpg'

function Virstata_services() {
<<<<<<< HEAD
  let Services = [
    {
      id: 0,
      imagess: BetonavimasImg,
      title: "Betonavimo darbai",
      description:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
=======
  const Services = [
    {
      id: 0,
      imagess: BetonavimasImg,
      title: 'Betonavimo darbai',
      description:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
      background: im1,
    },
    {
      id: 1,
      imagess: IvairusApdailosDarbai,
      title: 'Ivairūs Apdailos Darbai',
      description: 'bb',
      background: im2,
    },
    {
      id: 2,
      imagess: TerasosPavesinesImg,
      title: 'Terasos ir Pavesinės',
      description: 'cc',
      background: im3,
    },
    {
      id: 3,
      imagess: TrinkeliuKlojimasImg,
      title: 'Trinkelių Klojimas',
      description: 'dd',
      background: im4,
    },
    {
      id: 3,
      imagess: TvorosVartaiImg,
<<<<<<< HEAD
      title: "Tvoros ir Vartai",
      description: "dd",
      background: im5,
    },
  ];
  const navMeniuStyle = {
    color: "#fff",
  };
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px 10px",
    backgroundColor: "rgba(65, 63, 63, 0.356)",
    zIndex: "1",
    boxShadow: "0 4px 3px 0px rgb(20, 20, 20)",
  };
  const [setSelectedImg] = useState(null);
  console.log(Services[0].imagess);
  console.log(BetonavimasImg);
=======
      title: 'Tvoros ir Vartai',
      description: 'dd',
      background: im5,
    },
  ]
  const navMeniuStyle = { color: '#fff' }
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 10px',
    backgroundColor: 'rgba(65, 63, 63, 0.356)',
    zIndex: '1',
    boxShadow: '0 4px 3px 0px rgb(20, 20, 20)',
  }
  const [setSelectedImg] = useState(null)
  console.log(Services[0].imagess)
  console.log(BetonavimasImg)
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

  const [active, setActive] = useState(0)

  function handleIdChange(e) {
<<<<<<< HEAD
    setActive(e.target.id);
    console.log(e.target.id);
    return setActive(e.target.id);
=======
    setActive(e.target.id)
    console.log(e.target.id)
    return setActive(e.target.id)
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
  }

  return (
    <div style={{ margin: 0 }}>
      <Nav stylesMeniu={navMeniuStyle} styles={navStyle} />
<<<<<<< HEAD
      <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
        Pasirinkite paslaugą
      </h2>
=======
      <h2 style={{ textTransform: 'uppercase', textAlign: 'center' }}>Pasirinkite paslaugą</h2>
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
      <div className={classes.Filter}>
        {Services.map((Services) => (
          <div
            className={classes.Filter_Item}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(${Services.background})`,
            }}
            id={Services.id}
<<<<<<< HEAD
            onClick={handleIdChange}>
            {" "}
            {Services.title}{" "}
=======
            onClick={handleIdChange}
          >
            {' '}
            {Services.title}{' '}
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
          </div>
        ))}
      </div>

      <div className={classes.services}>
        {/* {Services.id = 0 ? : Services.map((Services) =>
            < ImageGrid
            title={Services.title}
            description={Services.description}
            items={Services.imagess}
            setSelectedImg={setSelectedImg} />
          ) } */}

        <ImageGrid
          title={Services[active].title}
          description={Services[active].description}
          items={Services[active].imagess}
          setSelectedImg={setSelectedImg}
        />
      </div>
    </div>
<<<<<<< HEAD
  );
}
export default Virstata_services;
=======
  )
}
export default Virstata_services
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

// const navMeniuStyle = {
//   color: '#000'}
// const navStyle = {
//   display: 'flex',
//   position: 'static',
//   justifyContent: 'space-between',
//   width: '100%',
//   padding:    '10px 10px',
//     color:'black',
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
// }
