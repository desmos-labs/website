import { useState, useEffect } from "react"

export default function useWindowDimensions() {
  const [screenWidth, setScreenWidth] = useState(null)
  const [screenHeight, setScreenHeight] = useState(null)

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }

    if (!screenWidth || !screenHeight) {
      handleResize()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { screenWidth, screenHeight }
}
