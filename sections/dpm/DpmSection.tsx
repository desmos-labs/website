import React from "react"
import { Trans, useTranslation } from "next-i18next"
import Image from "next/image"
import dpmHandAndPhone from "@/public/dpmHandAndPhone.png"
import dpmIOSBanner from "@/public/dpmIOSBanner.png"
import dpmGooglePlayBanner from "@/public/dpmGooglePlayBanner.png"
import StoreButton from "@/components/DPM/StoreButton"

const DpmSection = () => {
  const { t } = useTranslation("dpm")
  return (
    <div className="mt-[100px] md:mt-[80px] lg:mt-[120px]">
      <div className="flex flex-1 flex-col text-center items-center m-xMd lg:flex-row lg:justify-between lg:text-start">
        <Image
          className="hidden md:block md:w-[300px] lg:w-[849px] lg:hidden"
          src={dpmHandAndPhone}
          alt="Hand"
          priority={true}
        />

        <div className="md:max-w-[600px] lg:max-w-[600px] lg:ml-[100px] xl:max-w-[1047px]">
          <h2 className="md:tracking-[0.0015em] tracking-[-0.015em] font-semibold text-[44px] md:text-[56px] text-desmos-black-light mb-[32px] break-after-column">
            {t("dpmPageTitle")}
          </h2>
          <div className="tracking-[0.03px] font-[400] text-desmos-black-light text-[14px] md:text-[20px] ">
            <Trans
              i18nKey={"pageDescription"}
              t={t}
              components={{
                bold: <span className="font-[600]" />,
              }}
            />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:flex-row lg:mt-[46px]">
            <StoreButton
              buttonClass={"w-[203px] h-[60px]"}
              buttonAlt={"IOS Download"}
              buttonImage={dpmIOSBanner}
              buttonLink={"https://apps.apple.com/us/app/brows/id1593594950"}
            />
            <div className="pb-[26px] md:pr-[24px]" />
            <StoreButton
              buttonClass={"w-[203px] h-[60px]"}
              buttonAlt={"Google Play Download"}
              buttonImage={dpmGooglePlayBanner}
              buttonLink={
                "https://play.google.com/store/apps/details?id=network.desmos.dpm"
              }
            />
          </div>
        </div>
        <Image
          className="hidden lg:block lg:object-right w-[619px]"
          src={dpmHandAndPhone}
          alt="Hand"
          priority={true}
        />
      </div>
      <div className="flex flex-1 items-center flex-col lg:hidden">
        <Image className="md:hidden" src={dpmHandAndPhone} alt="Hand" />
        <div className="pb-20 pt-[28px] md:flex flex-1 flex-row">
          <StoreButton
            buttonClass={"w-[180px]  md:w-[203px] md:h-[60px]"}
            buttonAlt={"IOS Download"}
            buttonImage={dpmIOSBanner}
            buttonLink={"https://apps.apple.com/us/app/brows/id1593594950"}
          />
          <div className="pb-[26px] md:pr-[24px]" />
          <StoreButton
            buttonClass={"w-[180px] md:w-[203px] md:h-[60px]"}
            buttonAlt={"Google Play Download"}
            buttonImage={dpmGooglePlayBanner}
            buttonLink={
              "https://play.google.com/store/apps/details?id=network.desmos.dpm"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default DpmSection
