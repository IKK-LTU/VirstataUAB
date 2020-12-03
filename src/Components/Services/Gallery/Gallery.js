<<<<<<< HEAD
/** @format */

import React from "react";
import classes from "./Gallery.css";

import image1 from "./Images/Betonavimas/aa.jpg";
import image2 from "./Images/Betonavimas/bb.jpg";
import image3 from "./Images/Betonavimas/vv.jpg";

const images = [
  { id: 1, src: image1, service: "Betonavimas" },
  { id: 2, src: image2, service: "Betonavimas" },
  { id: 3, src: image3, service: "Betonavimas" },
];
=======
import React from 'react'
import classes from './Gallery.css'

import image1 from './Images/Betonavimas/aa.jpg'
import image2 from './Images/Betonavimas/bb.jpg'
import image3 from './Images/Betonavimas/vv.jpg'

const images = [
  { id: 1, src: image1, service: 'Betonavimas' },
  { id: 2, src: image2, service: 'Betonavimas' },
  { id: 3, src: image3, service: 'Betonavimas' },
]
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

function Gallery() {
  return (
    <div className={classes.Gallery}>
      {images.map((images) => (
        <img alt="Images" key={images.id} src={images.src} />
      ))}
    </div>
<<<<<<< HEAD
  );
}
export default Gallery;
=======
  )
}
export default Gallery
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
