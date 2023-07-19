import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import MainLayout from "@/layouts/MainLayout"
import SectionLayout from "@/layouts/SectionLayout"
import Image from "next/image"
import mainImage from "@/public/404.png"
import OrangeButton from "@/components/OrangeButton"

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["not-found", "common"])),
  },
})

const Custom404 = () => {
  const { t } = useTranslation("not-found")

  return (
    <MainLayout
      title={t("pageTitle")}
      description={t("pageDescription")}
      pageRoute="/404"
      footerBackground={"bg-[#121217]"}
    >
      <SectionLayout
        fullScreenHeightOption="always"
        sectionBackground="bg-gradient-orange-mobile md:bg-gradient-orange-tablet lg:bg-gradient-orange-desktop bg-cover bg-center"
      >
        <div className="flex flex-col text-desmos-white-Default text-center items-center pt-[160px] md:pt-[60px]">
          <Image
            src={mainImage}
            alt={"404"}
            className="w-[248px] md:w-[408px] xl:w-[690px] pb-4"
          />
          <h1 className="xl:text-[88px] lg:text-[80px] md:text-[56px] text-[28px] font-[600]">
            {t("messageTitle")}
          </h1>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[27px] md:leading-[32px] leading-[24px] tracking-[.0015em] pb-10 md:py-12">
            {t("messageBody")}
          </p>
          <div>
            <OrangeButton
              buttonText={t("goToHomepage")}
              buttonLink={"/"}
              buttonPadding="px-16 py-2.5"
              isInternal={false}
            />
          </div>
        </div>
      </SectionLayout>
    </MainLayout>
  )
}

export default Custom404
