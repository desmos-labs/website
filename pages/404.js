import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import MainLayout from "@/layouts/main"
import SectionLayout from "@/layouts/section"
import CenteredContentLayout from "@/layouts/content-centered"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
})

export default function Custom404() {
  const { t } = useTranslation("common")

  return (
    <MainLayout title={t("pagetitle404")} description={t("description404")}>
      <SectionLayout fullScreenHeightOption="always">
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
