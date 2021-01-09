import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classes from './ServiceList.css'

const ServicesList = ({ headline, textOne, textTwo, textThree, textFour }) => {
  return (
    <Link to="/paslaugos" className={classes.ServiceListt} style={{ textDecoration: 'none' }}>
      <h4>{headline}</h4>
      <p
        style={{
          width: '90%',
          padding: '0 auto',
          margin: '0 auto',
          height: '60%',
          wordWrap: 'break-word',
        }}
      >
        <ul
          style={{
            width: '100%',
            padding: '0 0 0 15px',
            margin: '0 auto',
            height: 'auto',
            wordWrap: 'break-word',
          }}
        >
          <li style={{ marginBottom: '5px', width: '100%', wordWrap: 'break-word' }}>{textTwo}</li>
          <li style={{ marginBottom: '5px', width: '100%', wordWrap: 'break-word' }}>
            {textThree}
          </li>
          <li style={{ marginBottom: '5px', width: '100%', wordWrap: 'break-word' }}>{textFour}</li>
          <li style={{ marginBottom: '5px', width: '100%', wordWrap: 'break-word' }}>{textOne}</li>
        </ul>
      </p>
      <p
        style={{
          color: '#99db48',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          bottom: '0',
        }}
      >
        <strong
          style={{
            color: '#99db48',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            bottom: '0',
            marginTop: 'auto',
            textAlign: 'center',
          }}
        >
          GALERIJA
        </strong>
      </p>
    </Link>
  )
}
ServicesList.propTypes = {
  headline: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
  textThree: PropTypes.string.isRequired,
  textFour: PropTypes.string.isRequired,
}
export default ServicesList
