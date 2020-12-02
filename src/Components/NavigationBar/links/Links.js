import React from 'react';
import { FaTwitter, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import classes from './Links.css';

const Links = () => (
  <ul className={classes.links}>
    <li>
      <a href="https://www.facebook.com/virstata/">
        <FaFacebook
          className={classes.linksfacebook}
          url="https://www.facebook.com/virstata/"
        />
      </a>
    </li>

    <li>
      <a href="https://www.facebook.com/virstata/">
        <FaTwitter
          className={classes.linkstwitter}
          url="http://twitter.com/jaketrent"
        />
      </a>
    </li>

    <li>
      <a href="https://www.facebook.com/virstata/">
        <FaInstagramSquare className={classes.linksinstagram} />
      </a>
    </li>
  </ul>
);

export default Links;
