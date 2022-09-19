
import { useState, useEffect } from 'react'

function useScreenSize (screenWidth: number) {
  const [screenControl, setscreenControl] = useState<boolean>(false)

  const handleScreenSize = () => {
    if (window.innerWidth < screenWidth) {
      setscreenControl(true)
    } else {
      setscreenControl(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize)

    return () => {
      window.removeEventListener('resize', handleScreenSize)
    }
  }, [])

  return {
    screenControl
  }
}

export { useScreenSize }