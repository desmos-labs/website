import { appWithTranslation } from "next-i18next"
import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import init from "@socialgouv/matomo-next"

function App({ Component, pageProps }) {
  // Get Matomo constants
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL
  const matomoSiteID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

  useEffect(() => {
    // Initialize Matomo
    init({ url: matomoUrl, siteId: matomoSiteID })

    // It's fine to disable the exhaustive-deps rule here because we only want to run this effect once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(App)
