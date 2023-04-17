import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"

export default function DescriptionSection() {
  const { t } = useTranslation("university-program")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="flex flex-col xl:w-[85%] lg:w-[63%] text-desmos-white-Default xl:mt-96 lg:mt-52 md:mt-36 mt-14 lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] tracking-[.005em]">
        <p className="pb-10">{t("descriptionContent01")}</p>
        <p className="pb-10">{t("descriptionContent02")}</p>
        <p className="">{t("descriptionContent03")}</p>
      </div>
    </SectionLayout>
  )
}
