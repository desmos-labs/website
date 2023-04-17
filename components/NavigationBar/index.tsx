import React, { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import useBreakpoints from "@/hooks/useBreakpoints"
import DesmosLogo from "@/components/DesmosLogo"
import LargeMenu from "@/components/NavigationBar/components/LargeMenu"
import TabletMenu from "@/components/NavigationBar/components/TabletMenu"
import MobileMenu from "@/components/NavigationBar/components/MobileMenu"

const NavigationBar = () => {
  const { t } = useTranslation("common")
  const { locale } = useRouter()
  const [isMobile, isMd, isLg, isXl, isBreakpointReady] = useBreakpoints()
  const [selectedItemId, setSelectedItemId] = useState(-1)

  const menuItems = [
    {
      id: 0,
      title: t("menuBuild"),
      subMenuItems: [
        {
          id: 0,
          title: t("menuDocumentation"),
          link: "https://docs.desmos.network/",
          isExternal: true,
        },
        {
          id: 1,
          title: t("menuDesmosKickstartProgram"),
          link: "/kickstart-program",
          isExternal: false,
        },
      ],
      ref: useRef(null),
    },
    {
      id: 1,
      title: t("menuLearn"),
      subMenuItems: [
        {
          id: 0,
          title: t("menuDesmosAcademy"),
          link: "/academy",
          isExternal: false,
        },
        {
          id: 1,
          title: t("menuDesmosUniversityProgram"),
          link: "/university-program",
          isExternal: false,
        },
      ],
      ref: useRef(null),
    },
    {
      id: 2,
      title: t("menuExplore"),
      subMenuItems: [
        {
          id: 0,
          title: t("menuEcosystem"),
          link: "/ecosystem",
          isExternal: false,
        },
        {
          id: 1,
          title: t("menuDSM"),
          link: "https://bigdipper.live/desmos",
          isExternal: true,
        },
      ],
      ref: useRef(null),
    },
  ]

  if (!isBreakpointReady) {
    return null
  }

  return (
    <nav className="relative flex justify-between items-center w-full h-navbar-mobile md:h-navbar-md lg:h-navbar-lg xl:h-navbar-xl px-xMobile md:px-xMd lg:px-xLg xl:px-xXl">
      {/* z-index -30 is due to the Get DSM button has background gradient with z-index -20 */}
      {/* Moved to the MainLayout since we want it to not be bounded by max-w */}
      {/* <div className="absolute top-0 left-0 right-0 h-full -z-30 bg-desmos-background-primary lg:bg-transparent lg:bg-gradient-to-b from-desmos-background-primary" /> */}
      <Link href="/" locale={locale}>
        {isLg || isXl ? (
          <DesmosLogo width="166" height="40" />
        ) : (
          <DesmosLogo width="132" height="32" />
        )}
      </Link>

      {/* Desktop menu */}
      {(isLg || isXl) && <LargeMenu items={menuItems} />}

      {/* Table menu */}
      {isMd && (
        <TabletMenu items={menuItems} setSelectedItemId={setSelectedItemId} />
      )}

      {/* Mobile menu */}
      {isMobile && (
        <MobileMenu
          items={menuItems}
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
        />
      )}
    </nav>
  )
}

export default NavigationBar
