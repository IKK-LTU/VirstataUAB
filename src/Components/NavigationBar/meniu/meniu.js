import React from "react";
import { Link } from 'react-router-dom';

import classes from "./meniu.css";

const Meniu = (props) => (
  <ul className={classes.meniu}>
    <Link to="/"><li><a style={props.styles} href="virstata.html">Pagrindinis</a></li></Link>
    <Link to="/paslaugos"><li><a style={props.styles} href="virstata-paslaugos.html">Paslaugos</a></li></Link>
    <Link to="/apie"><li><a style={props.styles} href="virstata-apie.html">Apie UAB "Virstata"</a></li></Link>
    <Link to="/kontaktai"><li><a style={props.styles} href="virstata-kontaktai.html">Kontaktai</a></li></Link>
  </ul>
);

export default Meniu;
