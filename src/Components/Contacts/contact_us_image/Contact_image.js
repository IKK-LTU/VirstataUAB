import React from 'react'
import { motion } from 'framer-motion'
import classes from './Contact_image.css'
import Image from './undraw_contact_us.png'

const Contact_image = () => (
  <motion.div className={classes.contact_us_photo} initial={{ x: -2000 }} animate={{ x: 0 }}>
    <motion.img
      alt="contact-us"
      src={Image}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    />
  </motion.div>
)

export default Contact_image
