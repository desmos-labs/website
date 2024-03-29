import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"
import imgUniversity from "@/public/university-desmos.png"
import imgHillLg from "@/public/hill-program.png"
import imgHillMd from "@/public/hill-university-768.png"
import imgHillSm from "@/public/hill-program-mobile.png"
import Image from "next/image"

const BannerSection = () => {
  const { t } = useTranslation("university-program")

  return (
    <SectionLayout
      sectionBackground="lg:bg-university-banner md:bg-gradient-to-t md:from-[#802B0E] md:to-[#16151A_59.18%] bg-university-banner-mobile bg-cover bg-center"
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="z-[5] flex flex-col items-center text-desmos-white-Default text-center">
          <h1 className="hidden md:block xl:text-[56px] lg:text-[48px] text-[40px] lg:leading-[72px] leading-[60px] lg:tracking-[.005em] -tracking-[.015em] font-semibold">
            {t("bannerTitle")}
          </h1>
          <h1 className="md:hidden text-[28px] leading-[42px] -tracking-[.015em] font-semibold">
            <span className="block">{t("bannerMobileTitle01")}</span>
            <span className="block">{t("bannerMobileTitle02")}</span>
          </h1>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[30px] leading-[24px] tracking-[.0015em] pt-6 pb-10">
            {t("bannerDescription")}
          </p>
          <OrangeButton
            buttonText={t("bannerButton")}
            buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
            buttonMargin=""
            buttonPadding="px-8 py-2.5"
          />
        </div>
        <div className="lg:hidden absolute bottom-48 md:left-20 w-[319px] md:w-auto">
          <Image src={imgUniversity} alt="Background" />
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
