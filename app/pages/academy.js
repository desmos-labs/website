import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import BannerSection from "@/sections/academy/banner"
import IsTheDesmosSection from "@/sections/academy/isTheDesmos"
import WhyLearnDesmosSection from "@/sections/academy/whyLearnDesmos"
import TheSkillSection from "@/sections/academy/theSkill"
import TheEasiestWaySection from "@/sections/academy/theEasiestWay"
import JoinOurAcademySection from "@/sections/academy/joinOurAcademy"
import { NextSeo } from "next-seo"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["academy", "common"])),
  },
})

function Academy() {
  const { t } = useTranslation("academy")

  return (
    <>
      <NextSeo
        title={t("pageTitle")}
        description={t("pageDescription")}
        canonical="https://www.desmos.com/academy"
        openGraph={{
          url: "https://www.desmos.com/academy",
          title: "Desmos Academy",
          description: "Desmos Academy",
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
        <TheEasiestWaySection />
        <JoinOurAcademySection />
        <IsTheDesmosSection />
        <WhyLearnDesmosSection />
        <TheSkillSection />
      </MainLayout>
    </>
  )
}

export default Academy
