import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import classes from './SideDrawer.css'
import MobileLinks from './MobileLinks'


const SideDrawer = ({ clicked }) => (
  <nav className={classes.sideDrawer}>
    <p style={{ padding: '0' }} className={classes.Close}>
      <GrClose style={{ padding: '0' }} onClick={clicked} onKeyDown={clicked} />
    </p>
    <h1>Meniu</h1>
    <ul>
      <Link className={classes.mobileLinks} style={{ textDecoration: 'none', margin: '0' }} to="/">
        <li>
          <p>Pagrindinis</p>
        </li>
      </Link>
      <Link
        className={classes.mobileLinks}
        style={{ textDecoration: 'none', margin: '0' }}
        to="/paslaugos"
      >
        <li>
          <p>Paslaugos</p>
        </li>
      </Link>
      <Link className={classes.mobileLinks} style={{ textDecoration: 'none', margin: '0' }} to="/">
        <li>
          <p>Apie Įmonę</p>
        </li>
      </Link>
      <Link
        className={classes.mobileLinks}
        style={{ textDecoration: 'none', margin: '0' }}
        to="/kontaktai"
      >
        <li>
          <p>Kontaktai</p>
        </li>
      </Link>
    </ul>
    <MobileLinks />
  </nav>
)
SideDrawer.propTypes = {
  clicked: PropTypes.string.isRequired,
}
export default SideDrawer