import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import IconListing from "@/components/IconListing"
import OrangeButton from "@/components/OrangeButton"

const RequirementsSection = () => {
  const { t } = useTranslation("kickstart-program")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="flex flex-col text-desmos-white-Default xl:mt-28 md:mt-0">
        <h2 className="text-desmos-primary md:text-[40px] text-[24px] md:leading-[60px] leading-[36px] md:tracking-[.0015em] tracking-[.005em] font-semibold lg:mb-[85px] md:mb-[67px] mb-[44px]">
          {t("requirementsTitle")}
        </h2>
        <div className="grid lg:grid-cols-2 xl:gap-x-[120px] lg:gap-x-[72px] lg:gap-y-[105px] md:gap-y-[80px] gap-[56px]">
          <IconListing
            imagePath="/icon-company.svg"
            imageText={t("requirementsCardTitle01")}
            iconTitle={t("requirementsCardTitle01")}
            iconDescription={t("requirementsCardDescription01")}
          />
          <IconListing
            imagePath="/icon-conflict.svg"
            imageText={t("requirementsCardTitle02")}
            iconTitle={t("requirementsCardTitle02")}
            iconDescription={t("requirementsCardDescription02")}
          />
          <IconListing
            imagePath="/icon-team.svg"
            imageText={t("requirementsCardTitle03")}
            iconTitle={t("requirementsCardTitle03")}
            iconDescription={t("requirementsCardDescription03")}
          />
          <IconListing
            imagePath="/icon-plan.svg"
            imageText={t("requirementsCardTitle04")}
            iconTitle={t("requirementsCardTitle04")}
            iconDescription={t("requirementsCardDescription04")}
          />
        </div>
        <div className="flex flex-col items-center xl:mt-32 md:mt-20 mt-10">
          <OrangeButton
            buttonText={t("requirementsButton")}
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

export default RequirementsSection
