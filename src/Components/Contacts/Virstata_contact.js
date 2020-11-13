import React, { Component } from 'react';
import '../..';
import Nav from '../NavigationBar/Nav';
class Virstata_contacts extends Component {
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
        <h1>contacts</h1>
      </div>
    );
  }
}
export default Virstata_contacts;