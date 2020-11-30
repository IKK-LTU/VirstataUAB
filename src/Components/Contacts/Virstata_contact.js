import React, { Component } from 'react';
import Nav from '../NavigationBar/Nav';
import ContactImage from './contact_us_image/Contact_image';
import Form from './Form/Form';
import ContactsDetails from './contact-us-details/contact-us-details';
class Virstata_contacts extends Component {
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
      zIndex: '1',
      boxShadow: '0 4px 3px 0px rgb(20, 20, 20)',
    }
    
    return (
      <div>
        <Nav stylesMeniu={navMeniuStyle} styles={navStyle} />
        <ContactImage />
        <ContactsDetails />
        <Form />
        
      </div>
    );
  }
}
export default Virstata_contacts;