<<<<<<< HEAD
/** @format */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
=======
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

<<<<<<< HEAD
  return null;
=======
  return null
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
}
