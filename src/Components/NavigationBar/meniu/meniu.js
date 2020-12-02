import React from "react";
import { Link } from 'react-router-dom';
import Virstata from "../../Main/Virstata";
import classes from "./meniu.css";


const Meniu = (props) => (

    <ul className={classes.meniu}>
      <Link to="/"><li><span style={props.styles}>Pagrindinis</span></li></Link>
    <Link to="/paslaugos"><li><span style={props.styles} >Paslaugos</span></li></Link>
    
    <Link onClick={() => {
      return <Virstata jump={gotoAboutSection()}/>
    }}
      
      to="/"><li><span style={props.styles} >  {/* kad cia paspaudus iskviest pas jo teva gotoAboutSection */} 
        Apie UAB "Virstata"
      </span></li></Link>
      <Link to="/kontaktai"><li><span style={props.styles} >Kontaktai</span></li></Link>
    </ul>
  )


export default Meniu;
