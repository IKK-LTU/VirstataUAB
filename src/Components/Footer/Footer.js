import React, { Component } from 'react';

import Links from '../NavigationBar/links/Links';
import Navigations from './Navigations/Navigat';
import classes from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={classes.Foote}>
        <Navigations />
        <Links style={{ padding: '0' }} />

        <p>Copyright &copy; 2019 by UAB "Virstata". All rights reserved.</p>
      </footer>
    );
  }
}
export default Footer;
