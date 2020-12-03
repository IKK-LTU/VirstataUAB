<<<<<<< HEAD
/** @format */

import React from "react";

import Logo from "./logo/logo";
import Meniu from "./meniu/meniu";
import Links from "./links/Links";
=======
import React from 'react'

import Logo from './logo/logo'
import Meniu from './meniu/meniu'
import Links from './links/Links'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

const Nav = (props) => (
  <div style={props.styles}>
    <Logo />
<<<<<<< HEAD
    <Meniu
      gotopSection={props.gotopSection}
      gotoAboutSection={props.gotoAboutSection}
      styles={props.stylesMeniu}
    />
    <Links />
  </div>
);

export default Nav;
=======
    <Meniu styles={props.stylesMeniu} />
    <Links />
  </div>
)

export default Nav
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
