import React from "react";
import { Link } from 'react-router-dom';
import classes from "./meniu.css";

const Meniu = (props) => (
  <ul className={classes.meniu}>
    <Link to="/"><li><span style={props.styles}>Pagrindinis</span></li></Link>
    <Link to="/paslaugos"><li><span style={props.styles} >Paslaugos</span></li></Link>
    <Link to="/apie"><li><span style={props.styles} >Apie UAB "Virstata"</span></li></Link>
    <Link to="/kontaktai"><li><span style={props.styles} >Kontaktai</span></li></Link>
  </ul>
);

export default Meniu;
