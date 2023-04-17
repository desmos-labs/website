import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import OrangeButton from "@/components/OrangeButton"
import { MenuItem } from "@/types/MenuItem"
import { useRouter } from "next/router"

export interface LargeMenuProps {
  readonly items: MenuItem[]
}

const LargeMenu = (props: LargeMenuProps) => {
  const { items } = props
  const { locale } = useRouter()

  return (
    <div className="flex items-center gap-16">
      <div className="flex gap-12">
        {items.map((menuItem) => (
          <Menu>
            {({ open, close }) => (
              <div className="relative" onMouseLeave={() => close()}>
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
}

export default LargeMenu
