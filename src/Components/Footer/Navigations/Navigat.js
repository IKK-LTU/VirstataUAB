import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navigat.css'

const Navigat = () => (
  <div className={classes.Navigatmeniu}>
    <ul>
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

      <Link to="/">
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
  </div>
)
export default Navigat
