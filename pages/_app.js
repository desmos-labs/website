import { appWithTranslation } from "next-i18next"
import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import init from "@openpolitica/matomo-next"

function App({ Component, pageProps }) {
  // Get Matomo constants
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL
  const matomoSiteID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

  useEffect(() => {
    // Initialize Matomo
    init({ url: matomoUrl, siteId: matomoSiteID })
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(App)
