/** @format */

import React from "react";
import classes from "./Contact_image.css";
import Image from "./cover.jpg";
import { motion } from "framer-motion";

const Contact_image = () => (
  <motion.div
    className={classes.contact_us_photo}
    initial={{ x: -2000 }}
    animate={{ x: 0 }}>
    <motion.img
      alt="contact-us"
      src={Image}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    />
  </motion.div>
);

export default Contact_image;
