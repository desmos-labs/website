import { useEffect, useRef, useState } from "react"

/**
 * Video component with placeholder image
 *
 * @param src: Url
 *
 * @param placeholder: Tailwind bg
 *
 */

export default function VideoWithPlaceholder({ src, placeholder }) {
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [shouldShowVideo, setShouldShowVideo] = useState(true)
  const [shouldShowPlaceholder, setShouldShowPlaceholder] = useState(true)

  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setShouldShowPlaceholder(false)
        })
        .catch(() => {
          setShouldShowVideo(false)
        })
    }
  }, [isVideoLoaded])

  return (
    <div className={`relative w-full h-full`}>
      {shouldShowPlaceholder && placeholder && (
        <div
          className={`${placeholder} bg-center bg-contain bg-no-repeat absolute inset-0`}
        />
      )}
      {shouldShowVideo && src && (
        <video
          ref={videoRef}
          src={src}
          onLoadedData={() => {
            setIsVideoLoaded(true)
          }}
          type="video/mp4"
          autoPlay
          controls={false}
          playsInline
          muted
          loop
          className="absolute w-auto min-w-full h-full object-contain"
        />
      )}
    </div>
  )
}
