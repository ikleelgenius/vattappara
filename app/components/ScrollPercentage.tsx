import React, { useEffect, useState } from 'react'

const ScrollPercentage = () => {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY // Current scroll position
    const windowHeight = window.innerHeight // Height of the viewport
    const documentHeight = document.documentElement.scrollHeight // Total height of the document

    const totalHeight = documentHeight - windowHeight // Total scrollable height
    const scrolled = (scrollTop / totalHeight) * 100 // Calculate scroll percentage
    setScrollPercent(scrolled)

    if (scrollTop > 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const radius = 30

  return (
    <div
      style={{
        position: 'fixed',
        bottom: isVisible ? '10px' : '-70px',
        right: '10px',
        zIndex: 1000,
        transition: 'bottom 0.3s ease-in-out'
      }}
    >
      <svg width="60" height="60">
        {/* Background Circle */}
        <circle cx="30" cy="30" r={radius} stroke="none" fill="#11181c" />
        {/* Filler Circle as a pie chart */}
        <path
          fill="#36baf7"
          d={`
            M 30,30
            L ${30 + radius * Math.cos(0)} ${30 + radius * Math.sin(0)}
            A ${radius} ${radius} 0 ${scrollPercent > 50 ? 1 : 0} 1 
            ${30 + radius * Math.cos((scrollPercent / 100) * 2 * Math.PI)} 
            ${30 + radius * Math.sin((scrollPercent / 100) * 2 * Math.PI)}
            Z
          `}
        />
        <text
          onClick={() =>
            scrollPercent >= 95 ? window.scrollTo({ behavior: 'smooth', top: 0 }) : {}
          }
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fill="#fff"
          className={scrollPercent >= 95 ? 'cursor-pointer' : ''}
        >
          {scrollPercent >= 95 ? <>&uarr;</> : `${scrollPercent.toFixed(0)}%`}
        </text>
      </svg>
    </div>
  )
}

export default ScrollPercentage
