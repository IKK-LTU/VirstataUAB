import React from 'react'
import PropTypes from 'prop-types'
import { VscMenu } from 'react-icons/vsc'
import classes from './ToggleButton.css'


const toggleButton = ({ OpenMobileMenu }) => (
  <button onClick={OpenMobileMenu} type="button" className={classes.toggleButton}>
    <VscMenu className={classes.toggleButtonIcon} />
  </button>
)

toggleButton.propTypes = {
  OpenMobileMenu: PropTypes.string.isRequired,
}
export default toggleButton