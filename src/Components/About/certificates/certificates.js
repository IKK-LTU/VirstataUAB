/** @format */

import React from "react";
import classes from "./certificates.css";
import { motion } from "framer-motion";

const Certificate = (props) => (
  <motion.div
    className={classes.Certificates}
    initial={{ x: -2000 }}
    animate={{ x: 0 }}
    transition={{ delay: props.delay }}>
    <img alt="certificate" src={props.CertificateSrc}></img>
  </motion.div>
);
export default Certificate;
