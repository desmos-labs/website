import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"

const AcceptCategoriesSection = () => {
  const { t } = useTranslation("kickstart-program")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="flex flex-col text-desmos-white-Default xl:mt-16 lg:mt-0 md:mt-24 mt-16">
        <h2 className="text-desmos-primary lg:text-[40px] text-[24px] lg:leading-[60px] leading-[36px] lg:tracking-[.0015em] tracking-[.005em] lg:font-semibold font-bold lg:mb-[60px] md:mb-10 mb-[24px]">
          {t("acceptedCategoriesTitle")}
        </h2>
        <h3 className="lg:text-[24px] md:text-[22px] text-[18px] lg:leading-[38px] md:leading-[33px] leading-[27px] tracking-[.0015em] font-semibold md:pb-[8px] pb-2">
          {t("acceptedCategoriesSectionTitle01")}
        </h3>
        <ul className="ml-5 list-disc mb-[40px] lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] lg:tracking-[.0015em] md:tracking-[.005em] tracking-[.0015em]">
          <li>{t("acceptedCategoriesSection01Description01")}</li>
          <li>{t("acceptedCategoriesSection01Description02")}</li>
          <li>{t("acceptedCategoriesSection01Description03")}</li>
          <li>{t("acceptedCategoriesSection01Description04")}</li>
        </ul>
        <h3 className="lg:text-[24px] md:text-[22px] text-[18px]  lg:leading-[38px] md:leading-[33px] leading-[27px] tracking-[.0015em] font-semibold md:pb-[8px] pb-2">
          {t("acceptedCategoriesSectionTitle02")}
        </h3>
        <ul className="ml-5 list-disc lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] lg:tracking-[.0015em] md:tracking-[.005em] tracking-[.0015em]">
          <li>{t("acceptedCategoriesSection02Description01")}</li>
          <li>
            {t("acceptedCategoriesSection02Description02")}
            <ul className="list-disc list-inside ml-3 mt-4 text-desmos-primary leading-[48px] md :leading-[48px] lg:leading-[54px]">
              <li>
                <a
                  href="https://github.com/desmos-labs/desmjs"
                  target="_blank"
                  className="text-desmos-primary hover:text-[#F3725A]"
                >
                  {t("acceptedCategoriesLink01")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/desmos-labs/djuno"
                  target="_blank"
                  className="text-desmos-primary hover:text-[#F3725A]"
                >
                  {t("acceptedCategoriesLink02")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/desmos-labs/dpm"
                  target="_blank"
                  className="text-desmos-primary hover:text-[#F3725A]"
                >
                  {t("acceptedCategoriesLink03")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/desmos-labs/desmos-bindings"
                  target="_blank"
                  className="text-desmos-primary hover:text-[#F3725A]"
                >
                  {t("acceptedCategoriesLink04")}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="xl:mt-12 mt-10">
          <OrangeButton
            buttonText={t("acceptedCategoriesButton")}
            buttonLink={
              "https://docs.google.com/forms/d/e/1FAIpQLSent5pknHfLVjHpMvF6_DsR8JKQnTwqzyi3yYXxF5l-kpFngQ/viewform"
            }
            buttonMargin=""
            buttonPadding="px-8 py-2.5"
          />
        </div>
      </div>
    </SectionLayout>
  )
}

export default AcceptCategoriesSection
