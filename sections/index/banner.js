import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/orange-button"
import CenteredContentLayout from "@/layouts/content-centered"

export default function BannerSection() {
  const { t } = useTranslation("index")

  return (
    <SectionLayout
      contentBackground={{
        image:
          "xl:bg-home-banner-xl lg:bg-home-banner-lg md:bg-home-banner-md bg-home-banner-mobile",
        videos: {
          mobile: "/home_animation_375w.mp4",
          md: "/home_animation_768w.mp4",
          lg: "/home_animation_1280w.mp4",
          xl: "/home_animation_1920w.mp4",
        },
        isFullScreenWidth: false,
      }}
      fullScreenHeightOption="always"
    >
      {/* We should put the content at center, instead of using padding-top to adjust the vertical position*/}
      <CenteredContentLayout>
        <div className="flex flex-col items-center text-desmos-white-Default text-center">
          <h1 className="xl:text-[88px] lg:text-[80px] md:text-[56px] text-[44px] lg:leading-[116px] md:leading-[84px] leading-[66px] -tracking-[.015em] font-bold">
            {t("bannerTitle")}
          </h1>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[27px] md:leading-[32px] leading-[24px] tracking-[.0015em] xl:w-[42%] lg:w-[65%] md:w-[75%] w-[90%] pt-6 pb-10">
            {t("bannerDescription")}
          </p>
          <div className="flex md:flex-row flex-col">
            <OrangeButton
              buttonText={t("bannerButton01")}
              buttonLink={"https://docs.desmos.network/"}
              buttonMargin="md:mr-7 md:mb-0 mb-6 md:mt-0 mt-6"
              buttonPadding="px-4 py-2.5"
            />
            <OrangeButton
              buttonText={t("bannerButton02")}
              buttonLink={"https://dpm.desmos.network/"}
              buttonMargin=""
              buttonPadding="px-4 py-2.5"
            />
          </div>
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}
