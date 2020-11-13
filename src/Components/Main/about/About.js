import React from "react";

import classes from "./About.css";
import Logo2 from "./logo/Logo2";
import Text from "./Info/Text";

const About = (props) => (
  <div className={classes.About}>
    <span className={classes.blockhalf}>
        <Text />
    </span>
    <span className={classes.blockhalf}>
        <Logo2 />
    </span>
  </div>
);

export default About;
