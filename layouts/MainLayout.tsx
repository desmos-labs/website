import React from "react"
import Head from "next/head"
import { useEffect, useState } from "react"
import NavigationBar from "@/components/navbar"
import Footer from "@/components/footer"
import { install } from "resize-observer"
import useBreakpoints from "@/hooks/useBreakpoints"
import DesmosSeo from "@/components/desmos-seo"

export interface MainLayoutProps {
  readonly title: string
  readonly description: string
  readonly pageRoute: string
  readonly footerBackground?: string
  readonly children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const { title, description, pageRoute, footerBackground, children } = props

  const [isHydrated, setIsHydrated] = useState(false)
  const [isMobile, , , , isBreakpointReady] = useBreakpoints()
  const [navbarBgVisible, setNavbarBgVisible] = useState(false)

  useEffect(() => {
    // Fix the error of the slick slider on some versions of Safari: Unhandled Runtime Error ReferenceError: Can't find variable: ResizeObserver
    // https://stackoverflow.com/a/65832955/11261557
    install()

    setIsHydrated(true)
  }, [])

  useEffect(() => {
    handleScroll()
  }, [isBreakpointReady])

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    setNavbarBgVisible(currentScrollPos > 10 || isMobile)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  // Compute the proper page title and URL
  const pageTitle = title.includes("Desmos") ? title : `Desmos ${title}`

  return (
    <>
      {/* Meta information */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/desmos_favicon.svg" type="image/x-icon" />
      </Head>
      {/* SEO information */}
      <DesmosSeo
        title={pageTitle}
        description={description}
        pageRoute={pageRoute}
      />
      {/* Main content */}
      isHydrated && (
      <>
        <div className={`relative mx-auto w-full min-w-[375px]`}>
          <div
            className={`fixed top-0 w-full ${
              navbarBgVisible ? "bg-desmos-background-primary" : "bg-none"
            }  z-20`}
          >
            <div className="relative w-full min-w-[375px] max-w-[1920px] left-1/2 -translate-x-1/2">
              <NavigationBar />
            </div>
          </div>
          <main className="w-full">{children}</main>
          <div
            className={`relative w-full ${
              footerBackground
                ? footerBackground
                : "bg-desmos-background-primary"
            } bg-no-repeat`}
          >
            <div
              className={`relative left-1/2 -translate-x-1/2 w-full min-w-[375px] max-w-[1920px] ${
                footerBackground
                  ? footerBackground
                  : "bg-desmos-background-primary"
              } bg-no-repeat`}
            >
              <Footer />
            </div>
          </div>
        </div>
      </>
      )
    </>
  )
}

export default MainLayout