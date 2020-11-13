import React, { Component } from 'react';
import classes from './Virstata_about.css';
import Nav from '../NavigationBar/Nav';
class Virstata_about extends Component {
  render() {
    const navMeniuStyle = {
      color: '#000'}
    const navStyle = {
      display: 'flex',
      position: 'static',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 10px',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
  }
    return (
      <div >
        <Nav stylesMeniu={navMeniuStyle} styles={navStyle}/>
        <h1>about</h1>
      </div>
    );
  }
}
export default Virstata_about;