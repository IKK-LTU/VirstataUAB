import React from 'react'
import PropTypes from 'prop-types'
import classes from './ServiceList.css'


const ServicesList = ({ headline, text }) => {
  return (
  <div className={classes.ServiceListt}>
    <h4 style={{ marginBottom: '10px' }}>{headline}</h4>
    <p>
      {text}
      <strong
        style={{
          color: '#99db48',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          
        DAUGIAU!
      </strong>
    </p>
  </div>
)}
ServicesList.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default ServicesList