import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Main/Virstata'
import Services from './Components/Services/Virstata_services'
import Contacts from './Components/Contacts/Virstata_contact'

import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'


// {/* <SideDrawer /> <BackDrop /> */ }

function App() {
  
  // eslint-disable-next-line no-unused-vars
 

 
  
  return (
    <Router>
      <div style={{ height: '100%' }}>
        
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/paslaugos" component={Services} />
          <Route path="/" exact component={Home} />
          <Route path="/kontaktai" component={Contacts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
