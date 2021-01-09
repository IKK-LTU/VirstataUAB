import React from 'react'

import classes from './Button.css'

const Button = (name) => (
  <div className={classes.Button}>
    <button>{name}</button>
  </div>
)

export default Button
