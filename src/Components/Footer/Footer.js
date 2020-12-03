<<<<<<< HEAD
/** @format */

import React, { Component } from "react";

import Links from "../NavigationBar/links/Links";
import Navigations from "./Navigations/Navigat";
import classes from "./Footer.css";

=======
import React, { Component } from 'react'

import Links from '../NavigationBar/links/Links'
import Navigations from './Navigations/Navigat'
import classes from './Footer.css'

>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
class Footer extends Component {
  render() {
    return (
      <footer className={classes.Foote}>
        <Navigations />
<<<<<<< HEAD
        <Links style={{ padding: "0" }} />
=======
        <Links style={{ padding: '0' }} />
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

        <p>Copyright &copy; 2019 by UAB "Virstata". All rights reserved.</p>
      </footer>
    )
  }
}
<<<<<<< HEAD
export default Footer;
=======
export default Footer
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
