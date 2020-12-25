/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './meniu.css'

import Virstata from '../../Main/Virstata'

const Meniu = (styles) => (
  <ul className={classes.meniu}>
    <Link to="/">
      <li>
        <span style={styles}>Pagrindinis</span>
      </li>
    </Link>
    <Link to="/paslaugos">
      <li>
        <span style={styles}>Paslaugos</span>
      </li>
    </Link>

   
    <Link onClick={() => <Virstata jump={gotoAboutSection()} />} to="/">
      <li>
        <span style={styles}>
          {' '}
          {/* kad cia paspaudus iskviest pas jo teva gotoAboutSection */}
          Apie UAB Virstata
        </span>
      </li>
    </Link>
    <Link to="/kontaktai">
      <li>
        <span style={styles}>Kontaktai</span>
      </li>
    </Link>
  </ul>
)

export default Meniu
