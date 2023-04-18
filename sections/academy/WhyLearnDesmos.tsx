import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import imgWhyLearnDesmos from "@/public/whyLearnDesmos.png"

const WhyLearnDesmosSection = () => {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-[38px] md:mt-[45px] lg:mt-[99px] xl:mt-[86px]">
        <div className="md:hidden grid grid-cols-2 mb-[60px]">
          <Image src={imgWhyLearnDesmos} alt="Icon" />
          <div></div>
        </div>
        <div className="hidden md:grid lg:col-span-2 xl:col-span-3 justify-items-center items-center lg:items-start md:pr-8">
          <Image src={imgWhyLearnDesmos} alt="Icon" />
        </div>
        <div className="md:col-span-3 md:pl-8 xl:pl-16">
          <h2 className="tracking-[0.005em] font-semibold text-desmos-primary whitespace-pre-wrap text-[24px] md:text-[40px] lg:text-[40px]">
            {t("whyLearnTheDesmosTitle")}
          </h2>
          <div className="lg:tracking-[0.005em] tracking-[0.0015em] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px] lg:mt-[74px] mt-[40px]">
            <div className="mb-[20px] md:mb-[26px] lg:mb-[32x]">
              {t("whyLearnTheDesmosContent01")}
            </div>
            <div className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
              {t("whyLearnTheDesmosContent02")}
            </div>
            <div className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
              {t("whyLearnTheDesmosContent03")}
            </div>
            <div className="lg:mb-[74px] mb-[60px]">
              {t("whyLearnTheDesmosContent04")}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default WhyLearnDesmosSection
