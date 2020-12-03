<<<<<<< HEAD
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
=======
import React, { Component } from 'react'

import classes from './Title.css'

class Title extends Component {
  state = {
    buttonsText: [
      { text: 'Paslaugos', id: 1 },
      { text: 'Susisiekite', id: 2 },
    ],
  }
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

  render() {
    return (
      <div className={classes.Title}>
        <h1>
          UAB "Virstata",
          <br /> statybos projektai
        </h1>
      </div>
<<<<<<< HEAD
    );
  }
}

export default Title;
=======
    )
  }
}

export default Title
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
