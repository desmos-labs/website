import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/orange-button"
import CenteredContentLayout from "@/layouts/content-centered"

export default function BannerSection() {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout
      sectionBackground="lg:bg-academy-banner bg-gradient-to-t from-[#802B0E] to-[#16151A_59.18%] bg-cover bg-bottom"
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="flex flex-col items-center text-desmos-white-Default text-center">
          <h1 className="xl:text-[56px] lg:text-[48px] xl:leading-[84px] lg:leading-[72px] md:text-[40px] text-[24px] md:leading-[48px] leading-[36px] -tracking-[.015em] font-semibold">
            {t("bannerTitle")}
          </h1>
          <p className="lg:w-full md:w-[70%] lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[30px] leading-[24px] tracking-[.0015em] pt-6 lg:pb-10 pb-16">
            {t("bannerDescription")}
          </p>
          <OrangeButton
            buttonText={t("bannerButton")}
            buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
            buttonMargin=""
            buttonPadding="px-10 py-2.5"
          />
        </div>
        <div className="lg:hidden absolute bottom-0 left-0 grid justify-items-center w-full">
          <img src="academy.png" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img className="hidden lg:block" src="hill-academy.png" />
          <img className="lg:hidden md:block hidden min-w-full" src="hill-academy-768.png" />
          <img className="md:hidden min-w-full" src="hill-academy-mobile.png" />
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}
