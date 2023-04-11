import MainLayout from "@/layouts/main"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ApplicationsSection from "@/sections/ecosystem/applications"
import WalletsSection from "@/sections/ecosystem/wallets"
import TheSDKSection from "@/sections/ecosystem/theSDK"
import OurChainSection from "@/sections/ecosystem/ourChain"
import SectionLayout from "@/layouts/section"
import { NextSeo } from "next-seo"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["ecosystem", "common"])),
  },
})

function Ecosystem() {
  const { t } = useTranslation("ecosystem")

  return (
    <>
      <NextSeo
        title={t("pageTitle")}
        description={t("pageDescription")}
        canonical="https://www.desmos.com/ecosystem"
        openGraph={{
          url: "https://www.desmos.com/ecosystem",
          title: "Ecosystem",
          description: "Ecosystem",
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
        <SectionLayout fullScreenHeightOption="never">
          <div className="pt-[34px] md:pt-0 xl:pl-[140px]">
            <h1 className="text-white md:tracking-[0.0015em] tracking-[-0.015em] mt-[24px] md:mt-[80px] lg:text-[40px] lg:leading-[60px] md:text-[32px] md:leading-[48px] text-[24px] leading-[36px] font-semibold">
              {t("headerTitle")}
            </h1>
            <p className="text-desmos-white-Default md:tracking-[0.005em] tracking-[0.0015em] mt-[16px] lg:text-[18px] lg:leading-[36px] md:text-[16px] md:leading-[32px] text-[14px] leading-[21px]">
              {t("headerDescription")}
            </p>
            <TheSDKSection />
            <OurChainSection />
            <WalletsSection />
            <ApplicationsSection />
          </div>
        </SectionLayout>
      </MainLayout>
    </>
  )
}

export default Ecosystem
