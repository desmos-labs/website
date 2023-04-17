import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"
import CenteredContentLayout from "@/layouts/CenteredContentLayout"

export default function GetInTouchSection() {
  const { t } = useTranslation("university-program")

  return (
    <div
      className={`relative overflow-hidden items-center w-full h-auto lg:h-screen min-h-mobile md:min-h-fit lg:min-h-lg xl:min-h-xl bg-desmos-background-secondary`}
    >
      <div className="container w-mobile md:w-md lg:w-lg xl:w-xl h-full px-xMobile md:px-xMd lg:px-xLg xl:px-xXl py-yMobile md:py-yMd lg:py-yLg xl:py-yXl">
        <CenteredContentLayout>
          <div className="text-desmos-black-light grid justify-items-center flex items-center mt-[74px] md:mb-[136px] md:mt-0 lg:mb-0 lg:mt-[110px] xl:mt-0">
            <h2 className="md:tracking-normal tracking-[.005em] font-semibold text-desmos-primary text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[60px]">
              {t("getInTouchTitle")}
            </h2>
            <div className="lg:max-w-[1440px] tracking-[.0015em] whitespace-pre-wrap md:whitespace-normal text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[38px] lg:my-[62px] md:my-[40px] mt-[40px] mb-[60px] text-center">
              {t("getInTouchContent")}
            </div>
            <OrangeButton
              buttonText={t("getInTouchButton")}
              buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
              buttonMargin=""
              buttonPadding="md:px-[40px] px-4 py-2.5"
            />
          </div>
        </CenteredContentLayout>
      </div>
    </div>
  )
}
