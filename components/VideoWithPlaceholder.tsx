import { useEffect, useRef, useState } from "react"

export interface VideoWithPlaceholderProps {
  /**
   * Url
   */
  readonly src: string

  /**
   * Tailwind background
   */
  readonly placeholder?: string
}

/**
 * Video component with placeholder image
 */
const VideoWithPlaceholder = (props: VideoWithPlaceholderProps) => {
  const { src, placeholder } = props

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [shouldShowVideo, setShouldShowVideo] = useState(true)
  const [shouldShowPlaceholder, setShouldShowPlaceholder] = useState(true)

  useEffect(() => {
    if (isVideoLoaded && videoRef.current !== null) {
      videoRef.current
        .play()
        .then(() => {
          setShouldShowPlaceholder(false)
        })
        .catch(() => {
          setShouldShowVideo(false)
        })
    }
  }, [isVideoLoaded, videoRef])

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
          typeof="video/mp4"
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

export default VideoWithPlaceholder
