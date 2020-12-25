import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import Home from './Components/Main/Virstata'
import Services from './Components/Services/Virstata_services'
// import About from './Components/Main/about/About';
import Contacts from './Components/Contacts/Virstata_contact'

import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop'

ReactDOM.render(
  <Router>
    <div>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/paslaugos" component={Services} />
        <Route path="/details" component={Home} />
        <Route path="/kontaktai" component={Contacts} />
      </Switch>

      <Footer />
    </div>
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
