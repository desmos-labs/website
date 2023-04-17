import { Popover, Transition } from "@headlessui/react"
import MobileMenuIcon from "@/components/icons/menu-mobile"
import CloseIcon from "@/components/icons/close"
import React, { Fragment } from "react"
import Link from "next/link"
import NavbarLinkButton from "@/components/NavbarLinkButton"
import { MenuItem } from "@/types/MenuItem"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

export interface MobileMenuProps {
  readonly items: MenuItem[]
  readonly selectedItemId: number
  readonly setSelectedItemId: (id: number) => void
}

const MobileMenu = (props: MobileMenuProps) => {
  const { items, selectedItemId, setSelectedItemId } = props

  const { t } = useTranslation("common")
  const { locale } = useRouter()

  return (
    <Popover className="relative">
      {({ open }) => (
        <div>
          <Popover.Button
            className="focus:outline-none"
            onClick={() => {
              setSelectedItemId(open ? -1 : 0)
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
                  {items.map((menuItem) => (
                    <div className="flex flex-col">
                      <div
                        key={menuItem.id}
                        onClick={() => {
                          setSelectedItemId(menuItem.id)
                        }}
                      >
                        <p
                          className={`cursor-pointer whitespace-nowrap text-xl font-semibold tracking-wider leading-[30px] ${
                            selectedItemId === menuItem.id
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
                {items.map(
                  (menuItem) =>
                    selectedItemId === menuItem.id && (
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
}
export default MobileMenu
