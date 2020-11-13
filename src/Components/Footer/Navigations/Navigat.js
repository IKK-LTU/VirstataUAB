import React from "react";
import { Link } from 'react-router-dom';
import classes from "./Navigat.css";

const Navigat = () => (
    <div className={classes.Navigatmeniu}>   
        <ul >
            <Link to="/"><li><a href="virstata.html">Pagrindinis</a></li></Link>
            <Link to="/paslaugos"><li><a href="virstata-paslaugos.html">Paslaugos</a></li></Link>
            <Link to="/apie"><li><a href="virstata-apie.html">Apie UAB "Virstata"</a></li></Link>
            <Link to="/kontaktai"><li><a href="virstata-kontaktai.html">Kontaktai</a></li></Link>
        </ul>
    </div>

);

export default Navigat;