<<<<<<< HEAD
/** @format */

import React, { Component } from "react";
=======
import React, { Component } from 'react'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

import Wall from '../../Img/siena.jpeg'
import classes from './Services.css'
import ServiceList from './ServiceList/ServiceList'

const Service = [
  {
<<<<<<< HEAD
    headline: "Betonavimo Darbai",
    Text:
      "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių. Kokie pamatai bus įrengiami, numatoma pastato projekte atlikus grunto tyrimus...",
=======
    headline: 'Betonavimo Darbai',
    Text:
      'Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių. Kokie pamatai bus įrengiami, numatoma pastato projekte atlikus grunto tyrimus...',
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
    id: 1,
  },

  {
<<<<<<< HEAD
    headline: "TVOROS IR TERASOS",
    Text:
      "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai,priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių...",
=======
    headline: 'TVOROS IR TERASOS',
    Text:
      'Pamatai gali būti gręžtiniai, juostiniai, stulpiniai,priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių...',
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
    id: 2,
  },

  {
<<<<<<< HEAD
    headline: "TERASOS, BEI PAVĖSINĖS",
    Text:
      "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių...",
=======
    headline: 'TERASOS, BEI PAVĖSINĖS',
    Text:
      'Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių...',
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
    id: 3,
  },

  {
<<<<<<< HEAD
    headline: "TRINKELIU KLOJIMAS",
    Text:
      "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato...",
    id: 4,
  },
  { headline: "APDAILOS DARBAI", Text: "aaa", id: 5 },
];
=======
    headline: 'TRINKELIU KLOJIMAS',
    Text:
      'Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato...',
    id: 4,
  },
  {
    headline: 'APDAILOS DARBAI',
    Text: 'aaa',
    id: 5,
  },
]
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
class Services extends Component {
  render() {
    return (
      <div
        className={classes.Services}
        style={{
<<<<<<< HEAD
          backgroundAttachment: "fixed",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(" +
            Wall +
            ")",
        }}>
        <h2> MŪSŲ ATLIEKAMI DARBAI</h2>
        <div className={classes.ServiceList}>
          {Service.map((Service, index) => {
            return (
              <ServiceList
                key={Service.id}
                headline={Service.headline}
                text={Service.Text}
              />
            );
          })}
        </div>
      </div>
    );
=======
          backgroundAttachment: 'fixed',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${Wall})`,
        }}
      >
        <h2> MŪSŲ ATLIEKAMI DARBAI</h2>
        <div className={classes.ServiceList}>
          {Service.map((Service, index) => (
            <ServiceList key={Service.id} headline={Service.headline} text={Service.Text} />
          ))}
        </div>
      </div>
    )
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
  }
}

export default Services
