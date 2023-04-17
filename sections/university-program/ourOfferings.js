import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"

export default function OurOfferingsSection() {
  const { t } = useTranslation("university-program")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="md:grid md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 mt-[38px] md:mt-[45px] lg:mt-[99px] xl:mt-[86px]">
        <div className="grid grid-cols-2 lg:grid-cols-1 md:hidden lg:grid lg:col-span-2 xl:col-span-3 justify-items-center flex items-center lg:items-start md:pr-8">
          <div className="block md:hidden"></div>
          <img src="/ourOfferings.png" />
        </div>
        <div className="md:col-span-3 xl:pl-16">
          <h2 className="md:tracking-normal tracking-[.005em] font-semibold text-desmos-primary whitespace-pre-wrap text-[24px] md:text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] lg:leading-[60px]">
            {t("ourOfferingsTitle")}
          </h2>
          <div className="md:tracking-[.005em] tracking-[.0015em] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px] lg:mt-[74px] mt-[40px]">
            <div className="mb-[20px] md:mb-[26px] lg:mb-[36px]">
              {t("ourOfferingsContent01")}
            </div>
            <div className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
              {t("ourOfferingsContent02")}
            </div>
          </div>
        </div>
        <div className="lg:hidden md:grid md:col-span-2 hidden justify-items-center flex items-center pl-8">
          <img src="/ourOfferings.png" />
        </div>
      </div>
    </SectionLayout>
  )
}
