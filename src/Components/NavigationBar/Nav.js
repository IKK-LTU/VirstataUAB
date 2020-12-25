import React from 'react'

import Logo from './logo/logo'
import Meniu from './meniu/meniu'
import Links from './links/Links'

const Nav = (props) => (
  <div style={props.styles}>
    <Logo />
    <Meniu styles={props.stylesMeniu} />
    <Links />
  </div>
)

export default Nav
