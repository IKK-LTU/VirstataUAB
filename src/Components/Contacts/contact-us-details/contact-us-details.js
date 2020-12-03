<<<<<<< HEAD
/** @format */

import React from "react";
import classes from "./contact-us-details.css";
import images from "../../Img/logo2.jpg";
import { motion } from "framer-motion";
import Form from "../Form/Form";

const Contacts_details = () => (
  <div className={classes.contactUs_details}>
    <motion.div
      className={classes.contactUs_info}
      initial={{ x: -1000 }}
      animate={{ x: 20 }}>
=======
import React from 'react'
import { motion } from 'framer-motion'
import classes from './contact-us-details.css'
import images from '../../Img/logo2.jpg'

const Contacts_details = () => (
  <div className={classes.contactUs_details}>
    <motion.div className={classes.contactUs_info} initial={{ x: -1000 }} animate={{ x: 20 }}>
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
      <p>
        <strong>Įmonė:</strong> UAB "Virstata"
      </p>
      <p>
        <strong>Įmonės kodas:</strong> 123456789
      </p>
      <p>
        <strong>PVM mokėtojo kodas:</strong> LT123456789
      </p>
      <p>
        <strong>A/s Nr.</strong> LT12 1234 1234 1234
      </p>
      <p>
        <strong>Banko kodas:</strong> 70440
      </p>
      <p>
        <strong>Tel. Nr.</strong> +37061135306
      </p>
      <p>
        <strong>Adresas:</strong> Gedvydžių g. 7-9, Vilnius
      </p>
      <p>
        <strong>El. paštas:</strong> virstata@gmail.com
      </p>
    </motion.div>
<<<<<<< HEAD
    {/* <motion.div className={classes.contactUs_details_img}
    initial={{x: -1000}}
    animate={{x: 20}}>
    <img alt="img" src={images}></img>
    </motion.div> */}
    <motion.div
      className={classes.contactUs_form}
      initial={{ x: -1000 }}
      animate={{ x: 20 }}>
      <Form />
    </motion.div>
  </div>
);

export default Contacts_details;
=======
    <motion.div
      className={classes.contactUs_details_img}
      initial={{ x: -1000 }}
      animate={{ x: 20 }}
    >
      <img alt="img" src={images} />
    </motion.div>
  </div>
)

export default Contacts_details
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
