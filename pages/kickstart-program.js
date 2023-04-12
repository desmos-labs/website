import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BannerSection from "@/sections/kickstart-program/banner"
import HowItWorksSection from "@/sections/kickstart-program/how-it-works"
import RequirementsSection from "@/sections/kickstart-program/requirements"
import AcceptCategoriesSection from "@/sections/kickstart-program/accepted-categories"

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
      url="https://www.desmos.network/kickstart-program"
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
