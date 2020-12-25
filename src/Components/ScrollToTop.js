import { useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
