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
        2014 metais, Vilniuje registruota statybos įmonė. Direktorius- Virginijus Kunickas.
        <br />
        <br />
        {/* Pagrindinė įmonės veikla vykdoma Vilniaus mieste,
         tačiau klientų bėdoje nepaliekame ir esant
        poreikiui galime dirbti užmiestyje. */}
        UAB Virstata- plataus spektro statybų įmonė atliekanti įvairaus dydžio ir sudėtingumo
        projektus. Esame lankstūs ir taip pat padedame klientams įgyvendinti unikalius projektus,
        taigi Jūsų vizija taps realybe. Pagrindinė įmonės veikla vykdoma Vilniaus mieste, tačiau
        esant reikalui galime dirbti užmiestyje ir kitame mieste.
      </p>
    </div>
  </div>
)

export default About
