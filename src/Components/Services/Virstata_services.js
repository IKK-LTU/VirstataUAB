import React, { useState } from 'react';
import 'react-image-lightbox/style.css'; 
import classes from './Virstata_services.css';
import UploadForm from './Upload/UploadForm';
import Nav from '../NavigationBar/Nav';
import ImageGrid from './Upload/ImageGrid';
import Modal from './Upload/Modal/Modal';
import ModalGallery from './Upload/ModalGallery';

function Virstata_services() {

  
    const navMeniuStyle = {
      color: '#000'}

    const navStyle = {
      display: 'flex',
      position: 'static',
      justifyContent: 'space-between',
      width: '100%',
      padding:    '10px 10px',
        color:'black',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }
    const [selectedImg, setSelectedImg] = useState(null);
    
    return (
      <div>
      <Nav stylesMeniu={navMeniuStyle} styles={navStyle}/>
          {/* <ul className={classes.services}>
            <li>
              <h3>Paslauga</h3>
            </li>
            <li>
              <Gallery images={images} />
              
            </li>
          </ul> */}
        <div className={classes.services}>
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && <ModalGallery selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          {/* {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */}
          
        </div>
          
      </div>
    );
  }
export default Virstata_services;