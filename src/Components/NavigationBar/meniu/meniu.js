import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classes from './meniu.css'

const Meniu = ({ jump }) => (
  <ul  className={classes.meniu}>
    <Link style={{ textDecoration: 'none', margin:'auto' }} to="/">
      <li>
        <span >Pagrindinis</span>
      </li>
    </Link>
    <Link style={{ textDecoration: 'none', margin:'auto'  }} to="/paslaugos">
      <li>
        <span>Paslaugos</span>
      </li>
    </Link>

    <Link style={{ textDecoration: 'none', margin:'auto'  }} to="/" onClick={jump} jump={jump}>
      <li>
        <span> Apie Įmonę</span>
      </li>
    </Link>
    <Link style={{ textDecoration: 'none', margin:'auto'  }} to="/kontaktai">
      <li>
        <span>Kontaktai</span>
      </li>
    </Link>
  </ul>
)
Meniu.propTypes = {
  jump: PropTypes.string.isRequired,
}
export default Meniu
