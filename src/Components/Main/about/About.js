import React from 'react'

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
