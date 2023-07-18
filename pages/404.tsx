import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import MainLayout from "@/layouts/MainLayout"
import SectionLayout from "@/layouts/SectionLayout"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
})

const Custom404 = () => {
  const { t } = useTranslation("common")

  return (
    <MainLayout
      title={t("pagetitle404")}
      description={t("description404")}
      pageRoute="/404"
      footerBackground={"bg-[#121217]"}
    >
      <SectionLayout
        fullScreenHeightOption="always"
        sectionBackground="bg-gradient-orange-mobile md:bg-gradient-orange-tablet lg:bg-gradient-orange-desktop bg-cover bg-center"
      >
        <CenteredContentLayout>
          <div className="text-desmos-white-Default text-center">
            <h1 className="xl:text-[88px] lg:text-[80px] md:text-[56px] text-[44px] lg:leading-[116px] md:leading-[84px] leading-[66px] -tracking-[.015em] font-bold">
              {t("title404")}
            </h1>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[27px] md:leading-[32px] leading-[24px] tracking-[.0015em] pt-6 pb-10">
              {t("description404")}
            </p>
          </div>
        </CenteredContentLayout>
      </SectionLayout>
    </MainLayout>
  )
}

export default Custom404
