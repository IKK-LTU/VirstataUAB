import React from 'react'
import Nav from '../NavigationBar/Nav'
import classes from './Virstata_about.css'
import Certificate from './certificates/certificates'
import Mission from './Layouts/Mission'

import im1 from './certificates/Certificates_images/certificate_img.jpg'

function VirstataAbout() {
  const CertificateImg = [
    { img: im1, delay: 2, id:1 },
    { img: im1, delay: 2.5, id:2 },
    { img: im1, delay: 3, id:3 },
    { img: im1, delay: 3.5, id:4 },
    { img: im1, delay: 4, id:5 },
  ]

  const navMeniuStyle = { color: '#fff' }
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
  return (
    <div>
      <Nav stylesMeniu={navMeniuStyle} styles={navStyle} />
      <Mission />

      <div className={classes.Certificate}>
        <h2>Sertifikatai</h2>
        <div className={classes.Certificates}>
          {CertificateImg.map((CertificateImgg) => (
            <Certificate
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
export default VirstataAbout
