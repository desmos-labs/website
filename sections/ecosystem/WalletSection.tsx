import React from "react"
import { useTranslation } from "next-i18next"
import LinkCardButton from "@/components/LinkCardButton"

const WalletsSection = () => {
  const { t } = useTranslation("ecosystem")
  const buttons = [
    {
      id: 1,
      title: "dpmTitle",
      image: "/DPM.png",
      content: "dpmContent",
      link: "/dpm",
      isExternal: true,
    },
    {
      id: 2,
      title: "keplrTitle",
      image: "/keplr.png",
      content: "keplrContent",
      link: "https://keplr.app/",
    },
    {
      id: 3,
      title: "cosmostationTitle",
      image: "/cosmostation-wallet.png",
      content: "cosmostationContent",
      link: "https://cosmostation.io/wallet",
    },
    {
      id: 4,
      title: "leapWalletTitle",
      image: "/LeapWallet.png",
      content: "leapWalletContent",
      link: "https://leapwallet.io/",
    },
    {
      id: 4,
      title: "xdefiTitle",
      image: "/XDEFI.png",
      content: "xdefiContent",
      link: "https://xdefi.io/",
    },
  ]
  return (
    <div className="mt-[60px] md:mt-[80px] lg:mt-[120px] text-white">
      <h2 className="md:tracking-[0.0015em] tracking-[-0.015em] font-semibold text-[18px] md:text-[22px] lg:text-[24px]">
        {t("walletsTitle")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[24px] md:gap-[18px] gap-4 mt-[16px] md:mt-[24px] xl:max-w-[1407px]">
        {buttons.map((button) => {
          return (
            <div className="md:col-span-1" key={button.id}>
              <LinkCardButton
                key={button.id}
                image={button.image}
                title={button.title}
                content={button.content}
                link={button.link}
                isExternal={button.isExternal}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WalletsSection
