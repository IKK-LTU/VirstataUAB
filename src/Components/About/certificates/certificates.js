import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import classes from './certificates.css'

const Certificate = ({delay, CertificateSrc}) => (
  <motion.div
    className={classes.Certificates}
    initial={{ x: -2000 }}
    animate={{ x: 0 }}
    transition={{ delay: {delay}}}
  >
    <img alt="certificate" src={CertificateSrc} />
  </motion.div>
)
Certificate.propTypes = {
  delay: PropTypes.string.isRequired,
  CertificateSrc: PropTypes.number.isRequired,
}
export default Certificate
