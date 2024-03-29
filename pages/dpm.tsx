import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import MainLayout from "@/layouts/MainLayout"
import DpmSection from "@/sections/dpm/DpmSection"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["dpm", "common"])),
  },
})

const Dpm = () => {
  const { t } = useTranslation("dpm")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/dpm"
      privacyPathOverride={"/dpm/privacy"}
      tosPathOverride={"/dpm/terms"}
    >
      <DpmSection />
    </MainLayout>
  )
}

export default Dpm
