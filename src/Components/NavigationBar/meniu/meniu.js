import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classes from './meniu.css'

const Meniu = ({ jump }) => (
  <ul className={classes.meniu}>
    <Link to="/">
      <li>
        <span>Pagrindinis</span>
      </li>
    </Link>
    <Link to="/paslaugos">
      <li>
        <span>Paslaugos</span>
      </li>
    </Link>

    <Link to="/" onClick={jump} jump={jump}>
      <li>
        <span> Apie UAB Virstata</span>
      </li>
    </Link>
    <Link to="/kontaktai">
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
