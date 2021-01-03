import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classes from './ServiceList.css'


const ServicesList = ({ headline, text }) => {
  return (
    <Link to="/paslaugos" className={classes.ServiceListt} style={{textDecoration: 'none'}}>
      <h4 style={{ marginBottom: '10px' }}>{headline}</h4>
      <p>
        {text}
        <strong
          style={{
            color: '#99db48',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          DAUGIAU!
        </strong>
      </p>
    </Link>
  )}
ServicesList.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default ServicesList