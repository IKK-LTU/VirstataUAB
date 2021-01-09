import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo/logo'
import Meniu from './meniu/meniu'
import Links from './links/Links'
import classes from './Nav.css'
import ToggleButton from './mobile/ToggleButton'

const Nav = ({ styles, jump, OpenMobileMenu }) => {
  return (
    <div style={styles} className={classes.Nav}>
      <Logo />
      <Meniu jump={jump} />
      <ToggleButton OpenMobileMenu={OpenMobileMenu} />
      <Links />
    </div>
  )
}
Nav.propTypes = {
  styles: PropTypes.string.isRequired,
  jump: PropTypes.string.isRequired,
  OpenMobileMenu: PropTypes.string.isRequired,
}
export default Nav
