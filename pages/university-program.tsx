import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import BannerSection from "@/sections/university-program/BannerSection"
import DescriptionSection from "@/sections/university-program/DescriptionSection"
import OurOfferingsSection from "@/sections/university-program/OurOfferingsSection"
import EligibilitySection from "@/sections/university-program/EligibilitySection"
import GetInTouchSection from "@/sections/university-program/GetInTouchSection"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["university-program", "common"])),
  },
})

const UniversityProgram = () => {
  const { t } = useTranslation("university-program")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/university-program"
      footerBackground="bg-desmos-background-secondary"
    >
      <BannerSection />
      <DescriptionSection />
      <OurOfferingsSection />
      <EligibilitySection />
      <GetInTouchSection />
    </MainLayout>
  )
}

export default UniversityProgram
