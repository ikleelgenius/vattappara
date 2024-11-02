import { FC, useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  speed: number
  className: string
}

const Typewriter: FC<TypewriterProps> = ({ text, speed, className }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    let typingText = ''

    const timer = setInterval(() => {
      if (i < text.length) {
        typingText += text.charAt(i)
        setDisplayText(typingText)
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return <span className={`${className}`}>{displayText}</span>
}

export default Typewriter
