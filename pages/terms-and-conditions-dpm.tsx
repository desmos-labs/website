import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import NestedList from "@/components/NestedList"
import MainLayout from "@/layouts/MainLayout"
import { ToSContent } from "@/pages/terms-and-conditions"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "terms-and-conditions-dpm",
      "common",
    ])),
  },
})

const TermsAndConditionsDPM = () => {
  const { t } = useTranslation("terms-and-conditions-dpm")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/terms-and-conditions-dpm"
    >
      <NestedList content={ToSContent} t={t} />
    </MainLayout>
  )
}

export default TermsAndConditionsDPM
