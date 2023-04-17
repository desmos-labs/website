import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"

export default function IsTheDesmosSection() {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-[38px] md:mt-[45px] lg:mt-[99px] xl:mt-[86px]">
        <div className="md:hidden grid grid-cols-2 mb-[60px]">
          <div></div>
          <img src="/isTheDesmos.png" />
        </div>
        <div className="md:col-span-3 xl:pr-[72px]">
          <h2 className="tracking-[0.005em] font-semibold text-desmos-primary whitespace-pre-wrap text-[24px] md:text-[40px] lg:text-[40px]">
            {t("isTheDesmosTitle")}
          </h2>
          <div className="md:pr-[64px] lg:pr-0 ml-[22px] md:ml-[32px] lg:ml-[32px] lg:tracking-[0.005em] tracking-[0.0015em] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px] lg:mt-[74px] mt-[40px]">
            <ul className="list-disc">
              <li className="mb-[20px] md:mb-[26px] lg:mb-[32x]">
                {t("isTheDesmosContent01")}
              </li>
              <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                {t("isTheDesmosContent02")}
              </li>
              <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                {t("isTheDesmosContent03")}
              </li>
              <li className="lg:mb-[74px] mb-[60px]">
                {t("isTheDesmosContent04")}
              </li>
            </ul>
          </div>
          <div className="grid md:block justify-items-center">
            <OrangeButton
              buttonText={t("isTheDesmosButton")}
              buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
              buttonMargin=""
              buttonPadding="md:px-[40px] px-4 py-2.5"
            />
          </div>
        </div>
        <div className="hidden md:grid lg:col-span-2 xl:col-span-3 justify-items-center items-center lg:items-start md:pl-8">
          <img src="/isTheDesmos.png" />
        </div>
      </div>
    </SectionLayout>
  )
}
