
import React from 'react'
import classes from './certificates.css'

function Certificate(CertificateSrc) {
  return (
    <motion className={classes.Certificates}>
      <img alt="certificate" src={CertificateSrc} />
    </motion>
  )
}
export default Certificate
