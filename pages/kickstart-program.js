import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BannerSection from "@/sections/kickstart-program/banner"
import HowItWorksSection from "@/sections/kickstart-program/how-it-works"
import RequirementsSection from "@/sections/kickstart-program/requirements"
import AcceptCategoriesSection from "@/sections/kickstart-program/accepted-categories"
import { NextSeo } from "next-seo"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["kickstart-program", "common"])),
  },
})

function KickstartProgram() {
  const { t } = useTranslation("kickstart-program")

  return (
    <>
      <NextSeo
        title={t("pageTitle")}
        description={t("pageDescription")}
        canonical="https://www.desmos.com/kickstart-program"
        openGraph={{
          url: "https://www.desmos.com/kickstart-program",
          title: "Desmos Kickstart Program",
          description: "Desmos Kickstart Program",
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
        <HowItWorksSection />
        <RequirementsSection />
        <AcceptCategoriesSection />
      </MainLayout>
    </>
  )
}

export default KickstartProgram
