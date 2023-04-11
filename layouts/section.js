import { useEffect, useState } from "react"
import useBreakpoints from "@/hooks/use-breakpoints"
import VideoWithPlaceholder from "@/components/video-with-placeholder"

/**
 * Foundation layout of all sections, background will always be fullscreen width, and content will always be in container width
 *
 * @param fullScreenHeightOption
 * "always", "onlyDesktop", "never"
 * Optional. If not present, the section height will be auto and bounded by min-height of each breakpoint
 *
 * @param contentBackground
 * {
 *   image: Url,
 *   videos: { mobile: Url, md: Url, lg: Url, xl: Url },
 *   isFullScreenWidth: Bool,
 * }
 * Optional. If isFullScreenWidth present and it's true, the background will be set to full screen width. Otherwise the background will be the same size as the container.
 *
 * @param sectionBackground
 * Tailwind bg
 * Optional. This is always as wide as the screen width, and as high as scetion height.
 * It is UNDER contentBackground
 *
 * @param children Required. The content of the section
 */
export default function SectionLayout({
  contentBackground,
  sectionBackground,
  fullScreenHeightOption,
  children,
}) {
  const [sectionHeight, setSectionHeight] = useState("h-auto")
  const [videoBackground, setVideoBackground] = useState(<></>)
  const { isMobile, isMd, isLg, isXl, isBreakpointReady } = useBreakpoints()

  useEffect(() => {
    setVideoBackground(
      <>
        {isXl && (
          <VideoWithPlaceholder
            src={contentBackground?.videos?.xl}
            placeholder={contentBackground?.image}
          />
        )}
        {isLg && (
          <VideoWithPlaceholder
            src={contentBackground?.videos?.lg}
            placeholder={contentBackground?.image}
          />
        )}
        {isMd && (
          <VideoWithPlaceholder
            src={contentBackground?.videos?.md}
            placeholder={contentBackground?.image}
          />
        )}
        {isMobile && (
          <VideoWithPlaceholder
            src={contentBackground?.videos?.mobile}
            placeholder={contentBackground?.image}
          />
        )}
      </>
    )
  }, [isMobile, isMd, isLg, isXl])

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
  }, [])

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
