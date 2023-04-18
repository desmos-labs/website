import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"
import Image from "next/image"
import imgAcademy from "@/public/academy.png"
import imgHillAcademyLg from "@/public/hill-academy.png"
import imgHillAcademyMd from "@/public/hill-academy-768.png"
import imgHillAcademySm from "@/public/hill-academy-mobile.png"

const BannerSection = () => {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout
      sectionBackground="lg:bg-academy-banner bg-gradient-to-t from-[#802B0E] to-[#16151A_59.18%] bg-cover bg-bottom"
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="flex flex-col items-center text-desmos-white-Default text-center">
          <h1 className="xl:text-[56px] lg:text-[48px] xl:leading-[84px] lg:leading-[72px] md:text-[40px] text-[24px] md:leading-[48px] leading-[36px] -tracking-[.015em] font-semibold">
            {t("bannerTitle")}
          </h1>
          <p className="lg:w-full md:w-[70%] lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[30px] leading-[24px] tracking-[.0015em] pt-6 lg:pb-10 pb-16">
            {t("bannerDescription")}
          </p>
          <OrangeButton
            buttonText={t("bannerButton")}
            buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
            buttonMargin=""
            buttonPadding="px-10 py-2.5"
          />
        </div>
        <div className="lg:hidden absolute bottom-0 left-0 grid justify-items-center w-full">
          <Image src={imgAcademy} alt="Desmos Academy background" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            className="hidden lg:block"
            src={imgHillAcademyLg}
            alt="Background"
          />
          <Image
            className="lg:hidden md:block hidden min-w-full"
            src={imgHillAcademyMd}
            alt="Background"
          />
          <Image
            className="md:hidden min-w-full"
            src={imgHillAcademySm}
            alt="Background"
          />
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}

export default BannerSection
