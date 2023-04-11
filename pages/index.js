import MainLayout from "@/layouts/main"
import BannerSection from "@/sections/index/banner"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ModulesSection from "@/sections/index/modules"
import AllinOneSection from "@/sections/index/all-in-one"
import CosmWasmSection from "@/sections/index/cosmwasm"
import CompleteToolkitSection from "@/sections/index/complete-toolkit"
import WhyDesmosSection from "@/sections/index/why-desmos"
import ContributeSection from "@/sections/index/contribute"
import { NextSeo } from "next-seo"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["index", "common"])),
  },
})

function Home() {
  const { t } = useTranslation("index")
  return (
    <>
      <NextSeo
        title={t("pageTitle")}
        description={t("pageDescription")}
        canonical="https://www.desmos.com/"
        openGraph={{
          url: "https://www.desmos.com/",
          title: "Desmos Home",
          description: "Desmos Home",
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
      <MainLayout title={t("pageTitle")} description={t("pageDescription")}>
        <BannerSection />
        <AllinOneSection />
        <ModulesSection />
        <CosmWasmSection />
        <CompleteToolkitSection />
        <WhyDesmosSection />
        <ContributeSection />
      </MainLayout>
    </>
  )
}

export default Home
