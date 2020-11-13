import React, { Component } from "react";

import Wall from "../../Img/siena.jpeg";
import classes from "./Services.css";
import ServiceList from "./ServiceList/ServiceList";

const Service = [
    {headline: "Betonavimo Darbai",
    Text: "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių. Kokie pamatai bus įrengiami, numatoma pastato projekte atlikus grunto tyrimus..."
    ,id: 1
    },

    {headline: "TVOROS IR TERASOS",
    Text: "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai,priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių..."
    ,id:2
},

    {headline: "TERASOS, BEI PAVĖSINĖS",
     Text: "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato, būsimųjo apkrovų, grunto ypatybių..."
    ,id:3},

    {headline: "TRINKELIU KLOJIMO DARBAI",
     Text: "Pamatai gali būti gręžtiniai, juostiniai, stulpiniai, priklausomai nuo statomo pastato..."
    ,id:4},
    {headline: "IVAIRŪS APDAILOS DARBAI",
     Text: "aaa"
     , id:5
}
]
class Services extends Component {
    
  render(){
    return (
      <div
        className={classes.Services}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.2)),url(" +
            Wall +
            ")",
        }}>

        <h2> MŪSŲ ATLIEKAMI DARBAI</h2>
        {Service.map((Service,index) => {
            return <ServiceList
            key={Service.id}
            headline={Service.headline}
            text={Service.Text} />
            })}
      </div>
    );
    }
  };

export default Services;
