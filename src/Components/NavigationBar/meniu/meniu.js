<<<<<<< HEAD
/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Virstata from "../../Main/Virstata";
import classes from "./meniu.css";

const Meniu = (props) => (
  <ul className={classes.meniu}>
    <Link onClick={props.gotopSection} to="/">
=======
import React from 'react'
import { Link } from 'react-router-dom'
import Virstata from '../../Main/Virstata'
import classes from './meniu.css'

const Meniu = (props) => (
  <ul className={classes.meniu}>
    <Link to="/">
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
      <li>
        <span style={props.styles}>Pagrindinis</span>
      </li>
    </Link>
    <Link to="/paslaugos">
      <li>
        <span style={props.styles}>Paslaugos</span>
      </li>
    </Link>

<<<<<<< HEAD
    <Link
      clicked={props.gotoAboutSection}
      onClick={props.gotoAboutSection}
      to="/">
      <li>
        <span style={props.styles}>
          {" "}
=======
    <Link onClick={() => <Virstata jump={gotoAboutSection()} />} to="/">
      <li>
        <span style={props.styles}>
          {' '}
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
          {/* kad cia paspaudus iskviest pas jo teva gotoAboutSection */}
          Apie UAB "Virstata"
        </span>
      </li>
    </Link>
    <Link to="/kontaktai">
      <li>
        <span style={props.styles}>Kontaktai</span>
      </li>
    </Link>
  </ul>
<<<<<<< HEAD
);
=======
)
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

export default Meniu
