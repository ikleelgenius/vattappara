import { useEffect, useState } from 'react'

const useAtTopOfPage = () => {
  const [isAtTop, setIsAtTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isAtTop
}

export default useAtTopOfPage
