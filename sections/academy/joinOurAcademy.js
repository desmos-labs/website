import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"

export default function JoinOurAcademySection() {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div className="md:hidden grid grid-cols-2 mb-[60px]">
          <img src="/joinOurAcademy.png" />
          <div></div>
        </div>
        <div className="hidden md:grid lg:col-span-2 xl:col-span-3 justify-items-center items-center lg:items-start md:pr-8">
          <img src="/joinOurAcademy.png" />
        </div>
        <div className="md:col-span-3 md:pl-8 xl:pl-16">
          <div className="tracking-[0.0015em] font-normal text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px]">
            <div className="mb-[60px] lg:mb-[74px]">
              <h3 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[36px] leading-[27px] mb-[16px]">
                {t("joinOurTitle")}
              </h3>
              {t("joinOurContent")}
            </div>
            <div className="lg:mt-[74px] mt-[40px] lg:mb-[74px] mb-[60px]">
              <h3 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[36px] leading-[27px] mb-[16px]">
                {t("startYourTitle")}
              </h3>
              {t("startYourContent")}
            </div>
            <div className="lg:mt-[74px] mt-[40px] lg:mb-[74px] mb-[60px]">
              <h3 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[36px] leading-[27px] mb-[16px]">
                {t("becomePartTitle")}
              </h3>
              {t("becomePartContent")}
            </div>
          </div>
          <div className="grid md:block justify-items-center">
            <OrangeButton
              buttonText={t("becomePartButton")}
              buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
              buttonMargin=""
              buttonPadding="md:px-[40px] px-4 py-2.5"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
