
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './meniu.css'

const Meniu = () => (
  <ul className={classes.meniu}>
    <Link to="/">
      <li>
        <span >Pagrindinis</span>
      </li>
    </Link>
    <Link to="/paslaugos">
      <li>
        <span >Paslaugos</span>
      </li>
    </Link>

   
    <Link onClick={() => "jump = {gotoAboutSection()}"  } to="/">
      <li>
        <span >
          {' '}
          {/* kad cia paspaudus iskviest pas jo teva gotoAboutSection */}
          Apie UAB Virstata
        </span>
      </li>
    </Link>
    <Link to="/kontaktai">
      <li>
        <span >Kontaktai</span>
      </li>
    </Link>
  </ul>
)
export default Meniu
