import React, { useCallback, useEffect, useMemo, useState } from "react"
import useBreakpoints from "@/hooks/useBreakpoints"
import VideoWithPlaceholder from "@/components/VideoWithPlaceholder"

export interface ContentBackground {
  /**
   * Url of the image
   */
  readonly image?: string

  /**
   * Url of the video
   */
  readonly videos?: {
    readonly mobile?: string
    readonly md?: string
    readonly lg?: string
    readonly xl?: string
  }

  /**
   * If true, the background will be set to full screen width. Otherwise, the background will be the same
   * size as the container.
   */
  readonly isFullScreenWidth?: boolean
}

export interface SectionLayoutProps {
  /**
   * Optional. If not present, the section height will be auto and bounded by min-height of each breakpoint
   */
  fullScreenHeightOption?: "always" | "onlyDesktop" | "never"

  /**
   * Tailwind bg
   * Optional. This is always as wide as the screen width, and as high as scetion height.
   * It is UNDER contentBackground
   */
  sectionBackground?: string

  /**
   * Optional. This is always as wide as the container width, and as high as section height.
   */
  contentBackground?: ContentBackground

  /**
   * Required. The content of the section
   */
  children: React.ReactNode
}

/**
 * Foundation layout of all sections, background will always be fullscreen width, and content will always be in container width
 */
const SectionLayout = (props: SectionLayoutProps) => {
  const {
    contentBackground,
    sectionBackground,
    fullScreenHeightOption,
    children,
  } = props

  const [sectionHeight, setSectionHeight] = useState("h-auto")
  const [videoBackground, setVideoBackground] = useState(<></>)
  const [isMobile, isMd, isLg, isXl, isBreakpointReady] = useBreakpoints()

  // Callback that allows to get the URL of the video to display
  // in the background of the section, depending on the current breakpoint
  const getVideoUrl = useCallback(
    (content: ContentBackground | undefined) => {
      switch (true) {
        case isXl:
          return content?.videos?.xl
        case isLg:
          return content?.videos?.lg
        case isMd:
          return content?.videos?.md
        case isMobile:
          return content?.videos?.mobile
        default:
          return undefined
      }
    },
    [isXl, isLg, isMd, isMobile]
  )

  // Memoize the URL of the video to display in the background of the section
  const videoUrl = useMemo(
    () => getVideoUrl(contentBackground),
    [getVideoUrl, contentBackground]
  )

  useEffect(() => {
    setVideoBackground(
      <>
        {isXl && videoUrl && (
          <VideoWithPlaceholder
            src={videoUrl}
            placeholder={contentBackground?.image}
          />
        )}
        {isLg && videoUrl && (
          <VideoWithPlaceholder
            src={videoUrl}
            placeholder={contentBackground?.image}
          />
        )}
        {isMd && videoUrl && (
          <VideoWithPlaceholder
            src={videoUrl}
            placeholder={contentBackground?.image}
          />
        )}
        {isMobile && videoUrl && (
          <VideoWithPlaceholder
            src={videoUrl}
            placeholder={contentBackground?.image}
          />
        )}
      </>
    )
  }, [videoUrl, isMobile, isMd, isLg, isXl])

  useEffect(() => {
    if (fullScreenHeightOption) {
      switch (fullScreenHeightOption) {
        case "always":
          setSectionHeight("h-screen")
          break
        case "onlyDesktop":
          setSectionHeight("h-auto lg:h-screen")
          break
        case "never":
          setSectionHeight("h-auto")
          break
      }
    }
  }, [fullScreenHeightOption])

  return (
    <div
      className={`relative overflow-hidden items-center w-full ${sectionHeight} min-h-mobile md:min-h-md lg:min-h-lg xl:min-h-xl ${
        sectionBackground ? sectionBackground : ""
      } bg-no-repeat`}
    >
      {/* Background */}
      {(contentBackground?.image || contentBackground?.videos) && (
        <div
          className={`absolute mix-blend-lighten m-auto top-0 left-0 right-0 ${
            contentBackground?.isFullScreenWidth
              ? "w-full"
              : "w-mobile md:w-md lg:w-lg xl:w-xl"
          } h-full -z-20`}
        >
          {videoBackground}
        </div>
      )}
      {/* Content */}
      <div className="container w-mobile md:w-md lg:w-lg xl:w-xl h-full px-xMobile md:px-xMd lg:px-xLg xl:px-xXl py-yMobile md:py-yMd lg:py-yLg xl:py-yXl">
        {isBreakpointReady && children}
      </div>
    </div>
  )
}

export default SectionLayout
