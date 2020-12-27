import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo/logo'
import Meniu from './meniu/meniu'
import Links from './links/Links'
import classes from './Nav.css'


const Nav = ({ styles }) => {
  return (
    <div style={styles} className={classes.Nav}>
      <Logo />
      <Meniu />
      <Links />
    </div>
  )
}
Nav.propTypes = {
  styles: PropTypes.string.isRequired,
}
export default Nav