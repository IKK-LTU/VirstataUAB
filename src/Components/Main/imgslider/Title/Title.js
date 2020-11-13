import React, { Component } from "react";

import classes from "./Title.css";
import Button from "../button/Button";


class Title extends Component {
    state= {
        buttonsText:[
            {text:"Pagrindinis", id:1},
             {text:"Galerija"},
              {text:"Kitas"} ],
        
    }
    render(){
        return(
        <div className={classes.Title}> 
            <h1>UAB "Virstata",<br/> statybos projektai.</h1>
            <div>
            {this.state.buttonsText.map((buttonsText,index) => {
                return <Button
                key={buttonsText.id}
                name={buttonsText.text}  />
            })}
            </div>   
        </div> 
            )
    }
    
   
};

export default Title;