import React from 'react'
import { FcReadingEbook } from 'react-icons/fc'
import classes from './About.css'

const About = () => (
  <div className={classes.About}>
    <div className={classes.Text}>
      <FcReadingEbook className={classes.Text_Icon} />
      <h3>
        <strong>Apie įmonę.</strong>
      </h3>
      <p>
        {' '}
        <strong>UAB „Virstata” -</strong>
        2014 metais užregistruota statybos įmonė.
        <br />
        <br />
        Pagrindinė įmonės veikla vykdoma Vilniaus mieste, tačiau klientų bėdoje nepaliekame ir esant
        poreikiui galime dirbti užmiestyje.
      </p>
    </div>
  </div>
)

export default About
