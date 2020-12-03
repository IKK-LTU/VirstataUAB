<<<<<<< HEAD
/** @format */

import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigat.css";
=======
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navigat.css'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

const Navigat = () => (
  <div className={classes.Navigatmeniu}>
    <ul>
      <Link to="/">
        <li>Pagrindinis</li>
      </Link>
      <Link to="/paslaugos">
        <li>Paslaugos</li>
      </Link>
      <Link to="/apie">
        <li>Apie UAB "Virstata"</li>
      </Link>
      <Link to="/kontaktai">
        <li>Kontaktai</li>
      </Link>
    </ul>
  </div>
<<<<<<< HEAD
);

export default Navigat;
=======
)

export default Navigat
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
