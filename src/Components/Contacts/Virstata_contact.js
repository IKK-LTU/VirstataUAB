import React, { useState } from 'react'
import Nav from '../NavigationBar/Nav'
import ContactsDetails from './contact-us-details/contact-us-details'
import Form from './Form/Form'
import SideDrawer from '../NavigationBar/mobile/SideDrawer'
import BackDrop from '../NavigationBar/mobile/Backdrop/BackDrop'
import classes from './Virstata_contact.css'

function VirstataContacts() {
  const navMeniuStyle = { color: 'rgb(0, 0, 0)' }
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0',
    backgroundColor: 'rgba(65, 63, 63, 0.56)',
    zIndex: '1',
    boxShadow: '0 4px 3px 0px #fff',
    color: 'rgb(0, 0, 0)',
  }

  const [sideDrawerClose, sideDrawerOpen] = useState(false)
  const mobileMenu = () => sideDrawerOpen(!sideDrawerClose)
  return (
    <div className={classes.Contacts}>
      {sideDrawerClose && <SideDrawer clicked={() => sideDrawerOpen(!sideDrawerClose)} />}
      {sideDrawerClose && <BackDrop clicked={() => sideDrawerOpen(!sideDrawerClose)} />}
      <Nav OpenMobileMenu={mobileMenu} stylesMeniu={navMeniuStyle} styles={navStyle} />
      <ContactsDetails />
      <Form />
    </div>
  )
}

export default VirstataContacts
