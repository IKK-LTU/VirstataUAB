import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'
import classes from './Navigat.css'

const Navigat = () => (
  <div className={classes.Navigatmeniu}>
    <ul>
      <Link to="/">
        <li>Pagrindinis</li>
      </Link>
      <Link to="/paslaugos">
        <li>Paslaugos</li>
      </Link>
      <Link to="/apie">
        <li>Apie UAB "Virstata"</li>
      </Link>
      <Link to="/kontaktai">
        <li>Kontaktai</li>
      </Link>
    </ul>
  </div>
)

export default Navigat
