import React from 'react';
import classes from './certificates.css';

const Certificate = (props) => (
    <motion className={classes.Certificates}>
    <img alt="certificate" src={props.CertificateSrc}></img>  
    </motion>
)
export default Certificate;