import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"

export default function EligibilitySection() {
  const { t } = useTranslation("university-program")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="md:grid md:grid-cols-5 xl:grid-cols-6 mt-[38px] md:mt-[45px] lg:mt-[99px] xl:mt-[86px]">
        <div className="md:hidden grid grid-cols-2 mb-[60px]">
          <div></div>
          <img src="/eligibility.png" />
        </div>
        <div className="md:col-span-3 xl:pr-16 lg:pr-8">
          <h2 className="md:tracking-normal tracking-[.005em] font-semibold text-desmos-primary text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[60px]">
            {t("eligibilityTitle")}
          </h2>
          <div className="md:tracking-[.005em] tracking-[.0015em] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px] lg:mt-[74px] mt-[40px]">
            <div className="lg:mt-[74px] mt-[40px] whitespace-pre-wrap">
              <h3 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[36px] md:leading-[33px] leading-[27px] md:mb-[16px] mb-[8px]">
                {t("eligibilitySubtitle01")}
              </h3>
              {t("eligibilityContent01a")}
              <span className="font-bold lg:font-semibold">
                {t("eligibilityContent01b")}
              </span>
              {t("eligibilityContent01c")}
            </div>
            <div className="lg:mt-[74px] mt-[40px] whitespace-pre-wrap">
              <h3 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[36px] md:leading-[33px] leading-[27px] md:mb-[16px] mb-[8px]">
                {t("eligibilitySubtitle02")}
              </h3>
              {t("eligibilityContent02")}
            </div>
          </div>
        </div>
        <div className="hidden md:grid md:col-span-2 xl:col-span-3 justify-items-center flex items-center lg:items-start md:pl-8">
          <img src="/eligibility.png" />
        </div>
      </div>
    </SectionLayout>
  )
}
