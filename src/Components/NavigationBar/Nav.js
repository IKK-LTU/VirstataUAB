import React from 'react'
import Logo from './logo/logo'
import Meniu from './meniu/meniu'
import Links from './links/Links'


const Nav = (styles, stylesMeniu) => {
  return (
  <div style={styles}>
    <Logo />
    <Meniu styles={stylesMeniu} />
    <Links />
  </div>)
}
export default Nav