import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import BannerSection from "@/sections/index/BannerSection"
import ModulesSection from "@/sections/index/ModulesSection"
import AllinOneSection from "@/sections/index/AllInOneSection"
import CosmWasmSection from "@/sections/index/CosmWasmSection"
import CompleteToolkitSection from "@/sections/index/CompleteToolkitSection"
import WhyDesmosSection from "@/sections/index/WhyDesmosSection"
import ContributeSection from "@/sections/index/ContributeSection"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["index", "common"])),
  },
})

const Home = () => {
  const { t } = useTranslation("index")
  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/"
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
