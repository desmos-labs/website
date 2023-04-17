import { Fragment, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Menu, Popover, Transition } from "@headlessui/react"
import { useTranslation } from "next-i18next"
import useBreakpoints from "@/hooks/useBreakpoints"
import DesmosLogo from "./logo-desmos"
import MobileMenuIcon from "./icons/menu-mobile"
import CloseIcon from "./icons/close"
import OrangeButton from "./orange-button"
import NavbarLinkButton from "./button-link-navbar"

export default function NavigationBar() {
  const { t } = useTranslation("common")
  const { locale } = useRouter()
  const [isMobile, isMd, isLg, isXl, isBreakpointReady] = useBreakpoints()
  const [selectedMobileMenuItemId, setSelectedMobileMenuItemId] = useState(-1)

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

  const largeMenu = (
    <div className="flex items-center gap-16">
      <div className="flex gap-12">
        {menuItems.map((menuItem) => (
          <Menu className="relative">
            {({ open, close }) => (
              <div onMouseLeave={() => close()}>
                <Menu.Button
                  className={`
                ${
                  open ? "text-desmos-primary" : "text-desmos-white-dark"
                } focus:outline-none`}
                  ref={menuItem.ref}
                  onMouseOver={() => {
                    if (menuItem.ref.current && !open) {
                      menuItem.ref.current.click()
                    }
                  }}
                >
                  <span className="font-semibold text-base tracking-[.001em]">
                    {menuItem.title}
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  {/* pt is the distance between menuItem and the subMenu */}
                  <Menu.Items className="absolute -left-4 z-10 pt-3 transform focus:outline-none">
                    <div className="overflow-hidden rounded-[4px] shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-10 bg-desmos-black-Default px-4 py-8">
                        {menuItem.subMenuItems.map((subMenuItem) => (
                          <Menu.Item key={subMenuItem.id}>
                            <div className="whitespace-nowrap text-md font-normal tracking-wider leading-[22px] text-desmos-white-Default hover:text-desmos-primary/80 focus:outline-none">
                              {subMenuItem.isExternal ? (
                                <a href={subMenuItem.link} target="_blank">
                                  {subMenuItem.title}
                                </a>
                              ) : (
                                <Link href={subMenuItem.link} locale={locale}>
                                  {subMenuItem.title}
                                </Link>
                              )}
                            </div>
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        ))}
      </div>
      <OrangeButton
        buttonText="Get DSM"
        buttonLink={"https://app.osmosis.zone/?from=OSMO&to=DSM"}
        buttonMargin=""
        buttonPadding="px-4 py-2.5"
      />
    </div>
  )

  const tabletMenu = (
    <Popover className="relative">
      {({ open }) => (
        <div>
          <Popover.Button className="focus:outline-none">
            {!open && <MobileMenuIcon width="32" height="32" />}
            {open && <CloseIcon width="32" height="32" />}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {/* pt is the distance between navbar and the monile menu */}
            <Popover.Panel className="fixed left-0 right-0 min-h-screen overflow-hidden z-10 pt-2 transform focus:outline-none">
              <div className="absolute w-full h-full overflow-scroll bg-desmos-background-primary px-xMd py-9">
                <div className="flex flex-col gap-[82px] pb-20">
                  {menuItems.map((menuItem) => (
                    <div className="flex flex-col">
                      <div
                        key={menuItem.id}
                        onClick={() => {
                          setSelectedMobileMenuItemId(menuItem.id)
                        }}
                      >
                        <p className="whitespace-nowrap text-xl font-semibold tracking-wider leading-[30px] text-[#EFEFEF]">
                          {menuItem.title}
                        </p>
                      </div>
                      <div className="flex flex-col gap-8 pt-9">
                        {menuItem.subMenuItems.map((subMenuItem) => (
                          <div className="whitespace-nowrap text-base font-normal tracking-wider leading-[24px] text-desmos-white-Default focus:outline-none">
                            {subMenuItem.isExternal ? (
                              <a href={subMenuItem.link} target="_blank">
                                {subMenuItem.title}
                              </a>
                            ) : (
                              <Link href={subMenuItem.link} locale={locale}>
                                {subMenuItem.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <NavbarLinkButton
                    buttonText={t("buttonDsm")}
                    buttonLink={"https://app.osmosis.zone/?from=OSMO&to=DSM"}
                    fontSize="text-[16px]"
                    leading="leading-[22px]"
                    tracking="tracking-[.005em]"
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )

  const mobileMenu = (
    <Popover className="relative">
      {({ open }) => (
        <div>
          <Popover.Button
            className="focus:outline-none"
            onClick={() => {
              setSelectedMobileMenuItemId(open ? -1 : 0)
            }}
          >
            {!open && <MobileMenuIcon width="32" height="32" />}
            {open && <CloseIcon width="32" height="32" />}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {/* pt is the distance between navbar and the monile menu */}
            <Popover.Panel className="fixed left-0 right-0 min-h-screen overflow-hidden z-10 pt-2 transform focus:outline-none">
              <div className="absolute w-full h-full bg-desmos-background-primary px-xMobile py-[34px]">
                <div className="flex gap-10">
                  {menuItems.map((menuItem) => (
                    <div className="flex flex-col">
                      <div
                        key={menuItem.id}
                        onClick={() => {
                          setSelectedMobileMenuItemId(menuItem.id)
                        }}
                      >
                        <p
                          className={`cursor-pointer whitespace-nowrap text-xl font-semibold tracking-wider leading-[30px] ${
                            selectedMobileMenuItemId === menuItem.id
                              ? "text-[#EFEFEF]"
                              : "text-[#878787]"
                          }`}
                        >
                          {menuItem.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {menuItems.map(
                  (menuItem) =>
                    selectedMobileMenuItemId === menuItem.id && (
                      <div className="flex flex-col gap-8 pt-9">
                        {menuItem.subMenuItems.map((subMenuItem) => (
                          <div className="whitespace-nowrap text-base font-normal tracking-wider leading-[24px] text-desmos-white-Default focus:outline-none">
                            {subMenuItem.isExternal ? (
                              <a href={subMenuItem.link} target="_blank">
                                {subMenuItem.title}
                              </a>
                            ) : (
                              <Link href={subMenuItem.link} locale={locale}>
                                {subMenuItem.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )
                )}
                <div className="absolute top-[412.5px]">
                  <NavbarLinkButton
                    buttonText={t("buttonDsm")}
                    buttonLink={"https://app.osmosis.zone/?from=OSMO&to=DSM"}
                    fontSize="text-[16px]"
                    leading="leading-[22px]"
                    tracking="tracking-[.005em]"
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )

  return isBreakpointReady ? (
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
      {(isLg || isXl) && largeMenu}
      {isMd && tabletMenu}
      {isMobile && mobileMenu}
    </nav>
  ) : undefined
}
