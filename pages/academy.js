import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import BannerSection from "@/sections/academy/BannerSection"
import IsForYouSection from "@/sections/academy/IsForYouSection"
import WhyLearnDesmosSection from "@/sections/academy/WhyLearnDesmos"
import SkillsSection from "@/sections/academy/SkillsSection"
import TheEasiestWaySection from "@/sections/academy/TheEasiestWaySection"
import JoinOurAcademySection from "@/sections/academy/JoinOurAcademySection"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["academy", "common"])),
  },
})

function Academy() {
  const { t } = useTranslation("academy")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/academy"
      footerBackground="bg-desmos-background-secondary"
    >
      <BannerSection />
      <TheEasiestWaySection />
      <JoinOurAcademySection />
      <IsForYouSection />
      <WhyLearnDesmosSection />
      <SkillsSection />
    </MainLayout>
  )
}

export default Academy
