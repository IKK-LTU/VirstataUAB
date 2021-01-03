
import React from 'react'
import PropTypes from 'prop-types'
import classes from './certificates.css'

function Certificate({CertificateSrc}) {
  return (
    <motion className={classes.Certificates}>
      <img alt="certificate" src={CertificateSrc} />
    </motion>
  )
}
Certificate.propTypes = {
  CertificateSrc: PropTypes.string.isRequired,
}
export default Certificate
