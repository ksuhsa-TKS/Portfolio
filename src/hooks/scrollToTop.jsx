import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const ScrollToTop = () => {
  const { pathname } = useLocation()
  const root = document.getElementById('root')

  useEffect(() => {
    window.scrollTo(0, 0)
    root.scrollTo(0, 0)
  }, [pathname])

  return null
}
