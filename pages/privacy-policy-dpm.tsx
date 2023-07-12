import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/NestedList"
import MainLayout from "@/layouts/MainLayout"
import { PPContent } from "@/pages/privacy-policy"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["privacy-policy-dpm", "common"])),
  },
})

const PrivacyPolicyDPM = () => {
  const { t } = useTranslation("privacy-policy-dpm")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/privacy-policy-dpm"
    >
      <NestedList content={PPContent} t={t} />
    </MainLayout>
  )
}

export default PrivacyPolicyDPM
