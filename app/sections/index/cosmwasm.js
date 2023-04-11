import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import CenteredContentLayout from "@/layouts/content-centered"
import NavbarLinkButton from "@/components/button-link-navbar"

export default function CosmWasmSection() {
  const { t } = useTranslation("index")

  return (
    <SectionLayout
      contentBackground={{
        image: "md:bg-gradient-orange-tablet lg:bg-cosmwasm",
        videos: {
          lg: "/section4_d.mp4",
          xl: "/section4_d.mp4",
        },
        isFullScreenWidth: false,
      }}
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="flex flex-row items-center text-desmos-white-dark text-left">
          <div className="lg:basis-3/4">
            <h2 className="text-desmos-primary xl:text-[56px] lg:text-[48px] md:text-[40px] text-[32px] lg:leading-[72px] md:leading-[60px] leading-[48px] lg:tracking-normal -tracking-[.02em] font-semibold">
              {t("cosmwasmTitle")}
            </h2>
            <h3 className="whitespace-pre-wrap md:whitespace-normal xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] xl:leading-[60px] md:leading-[48px] leading-[30px] font-normal mt-2 lg:mb-10 mb-6">
              {t("cosmwasmTagline")}
            </h3>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] tracking-[.0015em] xl:w-[65%] lg:w-full md:w-[75%] w-full pt-5 lg:pb-0 pb-5">
              {t("cosmwasmDescription01")}
            </p>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] tracking-[.0015em] xl:w-[50%] lg:w-[80%] md:w-[75%] w-full lg:pb-4 pb-0">
              {t("cosmwasmDescription02")}
            </p>
            <ul className="list-disc list-inside lg:pb-10 md:pb-14 pb-8">
              <li className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[40px] md:leading-[32px] leading-[24px] tracking-[.0015em]">
                {t("cosmwasmListing01")}
              </li>
              <li className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[40px] md:leading-[32px] leading-[24px] tracking-[.0015em]">
                {t("cosmwasmListing02")}
              </li>
              <li className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[40px] md:leading-[32px] leading-[24px] tracking-[.0015em]">
                {t("cosmwasmListing03")}
              </li>
              <li className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[40px] md:leading-[32px] leading-[24px] tracking-[.0015em]">
                {t("cosmwasmListing04")}
              </li>
            </ul>
            <NavbarLinkButton
              buttonText={t("buttonCosmwasm")}
              buttonLink={"https://cosmwasm.com/"}
              fontSize="md:text-[18px] text-[14px]"
              leading="md:leading-[27px] leading-[21px]"
              tracking="tracking-[.0015em]"
            />
          </div>
          <div className="hidden lg:block lg:basis-1/4">
            <img src="/net.webp" alt="CosmWasm" />
          </div>
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}
