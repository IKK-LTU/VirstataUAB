import React from 'react'
import { FaTwitter, FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import classes from './MobileLinks.css'

const MobileLinks = () => (
  <div className={classes.links}>
      <a href="https://www.facebook.com/virstata/">
        <FaFacebook className={classes.linksfacebook} url="https://www.facebook.com/virstata/" />
      </a>
      <a href="https://www.facebook.com/virstata/">
        <FaTwitter className={classes.linkstwitter} url="http://twitter.com/jaketrent" />
      </a>
      <a href="https://www.facebook.com/virstata/">
        <FaInstagramSquare className={classes.linksinstagram} />
      </a>
  </div>
)

export default MobileLinks