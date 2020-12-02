import React from 'react'
import { motion } from 'framer-motion'
import classes from './certificates.css'

const Certificate = (props) => (
  <motion.div
    className={classes.Certificates}
    initial={{ x: -2000 }}
    animate={{ x: 0 }}
    transition={{ delay: props.delay }}
  >
    <img alt="certificate" src={props.CertificateSrc} />
  </motion.div>
)
export default Certificate
