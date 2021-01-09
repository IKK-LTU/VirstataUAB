import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../logo/logo'
import Meniu from '../meniu/meniu'
import Links from '../links/Links'
import classes from '../Nav.css'

const NavMobile = ({ styles, jump }) => {
  return (
    <div style={styles} className={classes.Nav}>
      <Logo />
      <Meniu jump={jump} />
      <Links />
    </div>
  )
}
NavMobile.propTypes = {
  styles: PropTypes.string.isRequired,
  jump: PropTypes.string.isRequired,
}
export default NavMobile
