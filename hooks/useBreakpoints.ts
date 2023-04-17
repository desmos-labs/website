import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { ContentWidth } from "@/utils/sizes"

const useBreakpoints = () => {
  const [isBreakpointReady, setIsBreakpointReady] = useState(false)
  const isMobile = useMediaQuery({
    maxWidth: 767,
  })
  const isMd = useMediaQuery({
    minWidth: 768,
    maxWidth: 1279,
  })
  const isLg = useMediaQuery({
    minWidth: 1280,
    maxWidth: 1919,
  })
  const isXl = useMediaQuery({
    query: `(min-width: ${ContentWidth.xl})`,
  })

  useEffect(() => {
    if (isBreakpointReady || !(isMobile || isMd || isLg || isXl)) {
      return
    }
    setIsBreakpointReady(true)
  }, [isMobile, isMd, isLg, isXl])

  return [isMobile, isMd, isLg, isXl, isBreakpointReady]
}

export default useBreakpoints
