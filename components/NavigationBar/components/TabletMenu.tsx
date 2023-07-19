import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import MobileMenuIcon from "@/components/icons/menu-mobile"
import CloseIcon from "@/components/icons/close"
import Link from "next/link"
import NavbarLinkButton from "@/components/NavbarLinkButton"
import { MenuItem } from "@/types/MenuItem"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

export interface TabletMenuProps {
  readonly items: MenuItem[]
  readonly setSelectedItemId: (id: number) => void
}

const TabletMenu = (props: TabletMenuProps) => {
  const { items, setSelectedItemId } = props

  const { t } = useTranslation("common")
  const { locale } = useRouter()

  return (
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
            {/* pt is the distance between navbar and the mobile menu */}
            <Popover.Panel className="fixed left-0 right-0 min-h-screen overflow-hidden z-10 pt-2 transform focus:outline-none">
              <div className="absolute w-full h-full overflow-scroll bg-desmos-background-primary px-xMd py-9">
                <div className="flex flex-col gap-[82px] pb-20">
                  {items.map((menuItem) => (
                    <div className="flex flex-col" key={menuItem.id}>
                      <div
                        onClick={() => {
                          setSelectedItemId(menuItem.id)
                        }}
                      >
                        <p className="whitespace-nowrap text-xl font-semibold tracking-wider leading-[30px] text-[#EFEFEF]">
                          {menuItem.title}
                        </p>
                      </div>
                      <div className="flex flex-col gap-8 pt-9">
                        {menuItem.subMenuItems.map((subMenuItem) => (
                          <div
                            className="whitespace-nowrap text-base font-normal tracking-wider leading-[24px] text-desmos-white-Default focus:outline-none"
                            key={subMenuItem.id}
                          >
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
}

export default TabletMenu
