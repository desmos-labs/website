import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"
import imgHillLg from "@/public/hill-kickstart.png"
import imgHillMd from "@/public/hill-kickstart-768.png"
import imgHillSm from "@/public/hill-kickstart-mobile.png"
import Image from "next/image"

const BannerSection = () => {
  const { t } = useTranslation("kickstart-program")

  return (
    <SectionLayout
      sectionBackground="bg-kickstart-program-banner bg-cover bg-center"
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="flex flex-col items-center text-desmos-white-Default text-center">
          <h1 className="hidden md:block xl:text-[56px] lg:text-[48px] text-[40px] xl:leading-[84px] lg:leading-[72px] leading-[48px] lg:tracking-normal -tracking-[.015em] font-semibold">
            {t("bannerTitle")}
          </h1>
          <h1 className="md:hidden text-[24px] leading-[36px] -tracking-[.015em] font-semibold">
            <span className="block">{t("bannerMobileTitle01")}</span>
            <span className="block">{t("bannerMobileTitle02")}</span>
          </h1>
          <p className="xl:w-[65%] lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[30px] md:leading-[32px] leading-[24px] lg:tracking-[.005em] tracking-[.0015em] lg:pt-[22px] lg:pb-[46px] md:pt-[24px] md:pb-[40px] pt-[20px] pb-[30px]">
            {t("bannerDescription")}
          </p>
          <OrangeButton
            buttonText={t("bannerButton")}
            buttonLink={"https://forms.gle/GK6jH5bRR5RA4qF99"}
            buttonMargin=""
            buttonPadding="px-8 py-2.5"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image className="hidden lg:block" src={imgHillLg} alt="Icon" />
          <Image
            className="lg:hidden md:block hidden min-w-full"
            src={imgHillMd}
            alt="Icon"
          />
          <Image className="md:hidden min-w-full" src={imgHillSm} alt="Icon" />
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}

export default BannerSection
