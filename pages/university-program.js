import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BannerSection from "@/sections/university-program/banner"
import DescriptionSection from "@/sections/university-program/description"
import OurOfferingsSection from "@/sections/university-program/ourOfferings"
import EligibilitySection from "@/sections/university-program/eligibility"
import GetInTouchSection from "@/sections/university-program/getInTouch"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["university-program", "common"])),
  },
})

function UniversityProgram() {
  const { t } = useTranslation("university-program")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      url="https://desmos.network/university-program"
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
