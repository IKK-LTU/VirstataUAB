import React from 'react';

import classes from './gallery.css';

   
    const Gallery = (props) => (
      <div className={classes.gallery}>
          <img src={props.images[0]} alt="Images" ></img>
          <button class="btn btn1" alt="gallery">Galerija</button>
      </div>
    );
 
export default Gallery;