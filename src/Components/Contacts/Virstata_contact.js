import React from 'react'
import Nav from '../NavigationBar/Nav'
import ContactsDetails from './contact-us-details/contact-us-details'
import Form from './Form/Form'

function VirstataContacts() {
    const navMeniuStyle = { color: 'rgb(0, 0, 0)' }
    const navStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 10px',
      backgroundColor: 'rgba(65, 63, 63, 0.56)',
      zIndex: '1',
      boxShadow: '0 4px 3px 0px #fff',
      color: 'rgb(0, 0, 0)',
    }

    return (
      <div>
        <Nav stylesMeniu={navMeniuStyle} styles={navStyle} />
        <ContactsDetails />
        <Form />
      </div>
    )
  }

export default VirstataContacts
