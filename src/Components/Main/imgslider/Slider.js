import React, { Component } from "react";

import One from "./img/trs.jpeg";
import classes from "./Slider.css";
import Title from "./Title/Title";

class Nav extends Component {
  state = {
    Backgrounds: [
      {One}
    ],
  };
  render() {
    return (
      <div
        className={classes.Slider}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.2)),url(" +
            One +
            ")",
        }}
                        
      >
        <Title />
      </div>
    );
  }
}
export default Nav;
