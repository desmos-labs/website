import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"

const AllinOneSection = () => {
  const { t } = useTranslation("index")

  return (
    <SectionLayout
      contentBackground={{
        image: "lg:bg-all-in-one md:bg-all-in-one-md bg-all-in-one-mobile",
        videos: {
          lg: "/section2_d.mp4",
          xl: "/section2_d.mp4",
        },
        isFullScreenWidth: false,
      }}
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="flex flex-col text-desmos-white-dark text-left lg:pt-[80px]">
          <h2 className="text-desmos-primary xl:text-[56px] lg:text-[48px] md:text-[40px] text-[32px] lg:leading-[72px] md:leading-[60px] leading-[48px] -tracking-[.02em] lg:tracking-normal font-semibold">
            {t("allInOneTitle")}
          </h2>
          <h3 className="whitespace-pre-wrap md:whitespace-normal xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] xl:leading-[60px] md:leading-[48px] leading-[30px] font-normal mt-3 xl:mb-10 lg:mb-16 md:mb-10 mb-6 md:w-full w-[70%]">
            {t("allInOneTagline")}
          </h3>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[27px] md:leading-[32px] leading-[24px] tracking-[.0015em] xl:w-[35%] lg:w-[55%] md:w-[75%] w-full pt-6 pb-10">
            {t("allInOneDescription")}
          </p>
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}

export default AllinOneSection
