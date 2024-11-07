import { useEffect, useState } from 'react'

const useParallax = (scrollSpeed = 0.5) => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollY: scrollY * scrollSpeed
  }
}

export default useParallax
