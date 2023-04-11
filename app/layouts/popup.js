import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useTranslation } from "next-i18next"

// children should always be the last parameter
export default function PopupLayout({ openItem, popupContent, closeText }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation("index")

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {openItem}
      </div>
      {/* <Transition appear show={isOpen} as={Fragment}> */}
      <Dialog
        as="div"
        className="w-full z-[1] popup"
        onClose={() => {
          setIsOpen(true)
        }}
        open={isOpen}
      >
        {/* <Transition.Child
            // as={Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
        <Dialog.Backdrop className="fixed bg-desmos-background-primary bg-cover bg-center top-0 opacity-70 inset-0 transition-all z-20" />
        {/* </Transition.Child> */}

        {/* mobile close button */}
        <div className="fixed top-0 right-0 h-[60px] w-[190px] md:hidden z-[999]">
          <button
            type="button"
            className={`z-[999] outline-none shadow-none ring-transparent border-none top-3 right-5 absolute rounded-full text-desmos-white-dark group`}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <span className="hidden lg:block opacity-0 group-hover:opacity-100 popup-close-text pr-1 text-[16px] leading-[24px] transition ease-out duration-[600ms]">
              {t(closeText)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:rotate-90 ml-1 h-7 w-7 inline-block transition ease-out duration-[600ms] bg-desmos-background-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="inset-0 overflow-y-auto fixed top-[60px] lg:top-[80px] z-30 bg-gradient-orange-mobile md:bg-gradient-orange-tablet lg:bg-gradient-orange-desktop bg-desmos-background-primary bg-cover bg-center">
          {/* <Transition.Child
              // as={Fragment}
              enter="ease-out duration-700"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-700"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            > */}
          <div className="h-full container z-30 w-mobile mt-4 md:mt-0 md:w-md lg:w-lg xl:w-xl px-xMobile md:px-xMd lg:px-xLg xl:px-xXl flex items-center justify-center">
            <Dialog.Panel className="relative text-desmos-black-light w-full h-full">
              {popupContent}

              {/* tablet and desktop close button */}
              <button
                type="button"
                className={`group hidden md:block z-50 outline-none shadow-none ring-transparent border-none absolute right-0 -top-2 md:top-[4%] lg:top-[5.5rem] xl:top-[12rem] md:py-3 lg:p-3 rounded-full text-desmos-white-dark`}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <span className="group-hover:opacity-100 opacity-0 popup-close-text pr-1 text-[16px] transition ease-out duration-[600ms]">
                  {t(closeText)}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:rotate-90 ml-1 h-6 w-6 inline-block transition ease-out duration-[600ms]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Panel>
          </div>
          {/* </Transition.Child> */}
        </div>
      </Dialog>
      {/* </Transition> */}
    </>
  )
}
