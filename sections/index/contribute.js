import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import OrangeButton from "components/orange-button"
import VideoWithPlaceholder from "components/video-with-placeholder"

export default function ContributeSection() {
  const { t } = useTranslation("index")

  return (
    <SectionLayout
      contentBackground={{
        image: "md:bg-gradient-orange-tablet lg:bg-none",
      }}
      isFullScreen={{ inWidth: false, inHeight: true }}
      fullScreenHeightOption="onlyDesktop"
    >
      <div className="lg:grid lg:grid-cols-5 xl:grid-cols-7">
        <div className="lg:col-span-3 xl:col-span-3 lg:pr-4 xl:pr-24">
          <div className="mt-[35px] md:mt-[172px] lg:mt-0 xl:mt-[80px]">
            <h2 className="font-semibold text-desmos-primary text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-[48px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px]">
              {t("contributeTitle")}
            </h2>
          </div>
          <div className="mt-[38px] md:mt-[45px] lg:mt-[99px] xl:mt-[86px] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[32px] lg:leading-[36px] tracking-[.0015em] lg:tracking-[.005em] my-[24px] md:my-0 mb-[32px] md:mb-[40px] lg:mb-[16px]">
            {t("contributeDescription1a")}
            <a
              className="text-[#FF9575]"
              href="https://discord.com/invite/ckFcU5vxxc"
              target="_blank"
            >
              {t("contributeDescription1b")}
            </a>
            {t("contributeDescription1c")}
          </div>
          <div className="text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[32px] lg:leading-[36px] tracking-[.0015em] lg:tracking-[.005em] mb-[70px] lg:mb-[52px] xl:mb-[63px]">
            {t("contributeDescription2a")}
            <a
              className="text-[#FF9575]"
              href="https://docs.desmos.network/"
              target="_blank"
            >
              {t("contributeDescription2b")}
            </a>
            {t("contributeDescription2c")}
          </div>
          <OrangeButton
            buttonText={t("completeToolkitButton")}
            buttonLink="https://docs.desmos.network/"
            buttonMargin=""
            buttonPadding="px-4 py-2.5"
          />
        </div>
        <div className="hidden lg:col-span-2 xl:col-span-4 items-center lg:grid justify-items-center">
          <div className="relative w-full h-full mix-blend-lighten">
            <VideoWithPlaceholder
              src="/contribute-section-video-d.mp4"
              placeholder="bg-contribute"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
