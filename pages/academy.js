import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BannerSection from "@/sections/academy/banner"
import IsTheDesmosSection from "@/sections/academy/isTheDesmos"
import WhyLearnDesmosSection from "@/sections/academy/whyLearnDesmos"
import TheSkillSection from "@/sections/academy/theSkill"
import TheEasiestWaySection from "@/sections/academy/theEasiestWay"
import JoinOurAcademySection from "@/sections/academy/joinOurAcademy"
import { NextSeo } from "next-seo"
import DesmosSeo from "@/components/desmos-seo";

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
      url="https://www.desmos.com/academy"
      footerBackground="bg-desmos-background-secondary"
    >
      <BannerSection />
      <TheEasiestWaySection />
      <JoinOurAcademySection />
      <IsTheDesmosSection />
      <WhyLearnDesmosSection />
      <TheSkillSection />
    </MainLayout>
  )
}

export default Academy
