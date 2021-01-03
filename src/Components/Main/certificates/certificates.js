
import React from 'react'
import PropTypes from 'prop-types'
import classes from './certificates.css'

function Certificate({CertificateSrc}) {
  return (
    <div className={classes.Certificates}>
      <img alt="certificate" src={CertificateSrc} />
    </div>
  )
}
Certificate.propTypes = {
  CertificateSrc: PropTypes.string.isRequired,
}
export default Certificate
