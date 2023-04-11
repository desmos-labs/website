import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BannerSection from "@/sections/university-program/banner"
import DescriptionSection from "@/sections/university-program/description"
import OurOfferingsSection from "@/sections/university-program/ourOfferings"
import EligibilitySection from "@/sections/university-program/eligibility"
import GetInTouchSection from "@/sections/university-program/getInTouch"
import { NextSeo } from "next-seo"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["university-program", "common"])),
  },
})

function UniversityProgram() {
  const { t } = useTranslation("university-program")

  return (
    <>
      <NextSeo
        title={t("pageTitle")}
        description={t("pageDescription")}
        canonical="https://www.desmos.com/university-program"
        openGraph={{
          url: "https://www.desmos.com/university-program",
          title: "Desmos University Program",
          description: "Desmos University Program",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_HOST}/og-logo.webp`,
              width: 166,
              height: 40,
              alt: "Desmos Logo",
              type: "image/jpeg",
            },
          ],
          siteName: "Desmos",
        }}
        twitter={{
          handle: "@desmosnetwork",
          site: "@desmosnetwork",
          cardType: "summary_large_image",
        }}
      />
      <MainLayout
        title={t("pageTitle")}
        description={t("pageDescription")}
        footerBackground="bg-desmos-background-secondary"
      >
        <BannerSection />
        <DescriptionSection />
        <OurOfferingsSection />
        <EligibilitySection />
        <GetInTouchSection />
      </MainLayout>
    </>
  )
}

export default UniversityProgram
