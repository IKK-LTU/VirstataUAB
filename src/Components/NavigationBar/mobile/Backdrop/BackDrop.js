import React from 'react'
import PropTypes from 'prop-types'
import classes from './BackDrop.css'

const BackDrop = ({ clicked }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div onClick={clicked} onKeyDown={clicked} className={classes.backDrop} />
)
BackDrop.propTypes = {
  clicked: PropTypes.string.isRequired,
}
export default BackDrop

