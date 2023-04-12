import MainLayout from "@/layouts/main"
import BannerSection from "@/sections/index/banner"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ModulesSection from "@/sections/index/modules"
import AllinOneSection from "@/sections/index/all-in-one"
import CosmWasmSection from "@/sections/index/cosmwasm"
import CompleteToolkitSection from "@/sections/index/complete-toolkit"
import WhyDesmosSection from "@/sections/index/why-desmos"
import ContributeSection from "@/sections/index/contribute"
import DesmosSeo from "@/components/desmos-seo";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["index", "common"])),
  },
})

function Home() {
  const { t } = useTranslation("index")
  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      url="https://desmos.network"
    >
      <BannerSection />
      <AllinOneSection />
      <ModulesSection />
      <CosmWasmSection />
      <CompleteToolkitSection />
      <WhyDesmosSection />
      <ContributeSection />
    </MainLayout>
  )
}

export default Home
