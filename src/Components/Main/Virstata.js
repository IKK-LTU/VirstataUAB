import React, { Component } from 'react';

import Slider from './imgslider/Slider';
import About from './about/About';
import Services from './services/Services';
import Form from './Form/Form';
import Nav from '../NavigationBar/Nav';

class Virstata extends Component {
  render() {
    const navMeniuStyle = {
      color: '#fff'}
    const navStyle = {
        display: 'flex',
        position: 'fixed',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px 10px',
        backgroundColor: 'rgba(65, 63, 63, 0.356)',
    }
    return (
      <div >
        <Nav stylesMeniu={navMeniuStyle} styles={navStyle}/>
        <Slider />
        <About />
        <Services />
        <Form />
      </div>
    );
  }
}
export default Virstata;