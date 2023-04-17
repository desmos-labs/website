import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import OrangeButton from "components/orange-button"
import CenteredContentLayout from "@/layouts/content-centered"

export default function BannerSection() {
  const { t } = useTranslation("university-program")

  return (
    <SectionLayout
      sectionBackground="lg:bg-university-banner md:bg-gradient-to-t md:from-[#802B0E] md:to-[#16151A_59.18%] bg-university-banner-mobile bg-cover bg-center"
      fullScreenHeightOption="always"
    >
      <CenteredContentLayout>
        <div className="z-[5] flex flex-col items-center text-desmos-white-Default text-center">
          <h1 className="hidden md:block xl:text-[56px] lg:text-[48px] text-[40px] lg:leading-[72px] leading-[60px] lg:tracking-[.005em] -tracking-[.015em] font-semibold">
            {t("bannerTitle")}
          </h1>
          <h1 className="md:hidden text-[28px] leading-[42px] -tracking-[.015em] font-semibold">
            <span className="block">{t("bannerMobileTitle01")}</span>
            <span className="block">{t("bannerMobileTitle02")}</span>
          </h1>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[30px] leading-[24px] tracking-[.0015em] pt-6 pb-10">
            {t("bannerDescription")}
          </p>
          <OrangeButton
            buttonText={t("bannerButton")}
            buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
            buttonMargin=""
            buttonPadding="px-8 py-2.5"
          />
        </div>
        <div className="lg:hidden absolute bottom-48 md:left-20 w-[319px] md:w-auto">
          <img src="university-desmos.png" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <img className="hidden lg:block" src="hill-program.png" />
          <img className="lg:hidden md:block hidden min-w-full" src="hill-university-768.png" />
          <img className="md:hidden min-w-full" src="hill-program-mobile.png" />
        </div>
      </CenteredContentLayout>
    </SectionLayout>
  )
}
