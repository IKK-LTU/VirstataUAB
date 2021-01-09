import React from 'react'

import Wall from '../../Img/siena.jpeg'
import classes from './Services.css'
import ServiceList from './ServiceList/ServiceList'

function Services() {
  return (
    <div
      className={classes.ServicesStyle}
      style={{
        backgroundAttachment: 'fixed',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${Wall})`,
      }}
    >
      <h2> MŪSŲ ATLIEKAMI DARBAI</h2>
      <div className={classes.SserviceList}>
        <ServiceList
          headline="Betonavimo Darbai"
          textOne="Pamatai ,atraminės sienelės, poliai"
          textTwo="Perdangu betonavimas"
          textThree="Stulpų betonavimas"
          textFour="Slenkačių vartų pagrindo betonavimas"
        />
        <ServiceList headline="APDAILOS DARBAI"
          textOne="Pagrindo paruošimas, dažymas"
          textTwo="Gipso sūkimas"
          textThree="Plyteliu klijavimas, gruntavimas"
          textFour="Mediniai apdailos darbai" />
        <ServiceList
          headline="TERASOS, BEI PAVĖSINĖS"
          textOne="Įvairių tipų terasos ir pavėsinės"
          textTwo="Terasos poliu betonavima"
          textThree="Medžio paruošimas- lakavimas, dažymas"
          textFour="Medienos sutvirtinimas su betonu"
        />
        <ServiceList headline="TRINKELIU KLOJIMAS"
          textOne="Įvairiu rūšiu trinkelių klojimas"
           textTwo="Grunto įvertinimas ir pagrindo paruošimas"
           textThree="Trinkelių klojimas"
           textFour="Trinkelių tarpų užpildymas" />
        <ServiceList headline="TVOROS IR VARTAI"
          textOne="Metalinės ir Medinės tvoros bei vartai"
           textTwo=" Tvorų ir vartų dažymas"
           textThree="Tvirtinimas- sūkimas"
           textFour="Pagrindo paruošimas sulygiavimas" />
      </div>
    </div>
  )
}

export default Services
