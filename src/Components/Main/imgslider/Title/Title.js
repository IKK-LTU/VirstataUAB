/** @format */

import React, { Component } from "react";

import classes from "./Title.css";

class Title extends Component {
  state = {
    buttonsText: [
      { text: "Paslaugos", id: 1 },
      { text: "Susisiekite", id: 2 },
    ],
  };

  render() {
    return (
      <div className={classes.Title}>
        <h1>
          UAB "Virstata",
          <br /> statybos projektai
        </h1>
      </div>
    );
  }
}

export default Title;
