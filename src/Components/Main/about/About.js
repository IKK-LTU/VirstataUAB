<<<<<<< HEAD
/** @format */

import React from "react";
=======
import React from 'react'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

import classes from './About.css'
import Logo2 from './logo/Logo2'
import Text from './Info/Text'

const About = (props) => (
  <div className={classes.About}>
    <div className={classes.About_box}>
      <Text />
    </div>
    <div className={classes.About_box}>
      <Logo2 />
    </div>
  </div>
)

export default About
