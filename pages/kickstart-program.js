import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import BannerSection from "@/sections/kickstart-program/BannerSection"
import HowItWorksSection from "@/sections/kickstart-program/HowItWorksSection"
import RequirementsSection from "@/sections/kickstart-program/RequirementsSection"
import AcceptCategoriesSection from "@/sections/kickstart-program/AcceptedCategories"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["kickstart-program", "common"])),
  },
})

function KickstartProgram() {
  const { t } = useTranslation("kickstart-program")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/kickstart-program"
      footerBackground="bg-desmos-background-secondary"
    >
      <BannerSection />
      <HowItWorksSection />
      <RequirementsSection />
      <AcceptCategoriesSection />
    </MainLayout>
  )
}

export default KickstartProgram
