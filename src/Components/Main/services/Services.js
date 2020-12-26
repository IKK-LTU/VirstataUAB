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
          text="Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių. Kokie pamatai bus įrengiami, numatoma pastato projekte atlikus grunto tyrimus"
        />
        <ServiceList
          headline="TVOROS IR TERASOS"
          text="Pamatai gali būti gręžtiniai, juostiniai, stulpiniai,priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių..."
        />
        <ServiceList
          headline="TERASOS, BEI PAVĖSINĖS"
          text="Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato..."
        />
        <ServiceList
          headline="TRINKELIU KLOJIMAS"
          text="Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato..."
        />
        <ServiceList
          headline="APDAILOS DARBAI"
          text="Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato..."
        />
      </div>
    </div>
  )
}

export default Services
