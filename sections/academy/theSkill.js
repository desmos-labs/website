import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import OrangeButton from "@/components/OrangeButton"

export default function TheSkillSection() {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
        <div className="md:hidden grid grid-cols-2 mb-[60px]">
          <div></div>
          <img src="/theSkill.png" />
        </div>
        <div className="md:col-span-3 lg:col-span-2 xl:col-span-3 md:pr-8 lg:pr-0 xl:pr-16">
          <h2 className="tracking-[0.005em] font-semibold text-desmos-primary whitespace-pre-wrap text-[24px] md:text-[40px] lg:text-[40px]">
            {t("theSkillsTitle")}
          </h2>
          <div className="lg:w-[750px] xl:w-full md:pr-[44px] lg:pr-0 lg:tracking-[0.005em] tracking-[0.0015em] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px] lg:mt-[74px] mt-[40px]">
            <div className="mb-[20px] md:mb-[26px] lg:mb-[40px]">
              {t("theSkillsContent01")}
            </div>
            <div className="ml-[22px] md:ml-[32px]">
              <ul className="list-disc">
                <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                  {t("theSkillsContent02")}
                </li>
                <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                  {t("theSkillsContent03")}
                </li>
                <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                  {t("theSkillsContent04")}
                </li>
                <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                  {t("theSkillsContent05")}
                </li>
                <li className="mb-[20px] md:mb-[26px] lg:mb-[32px]">
                  {t("theSkillsContent06")}
                </li>
                <li className="lg:mb-[74px] mb-[60px]">
                  {t("theSkillsContent07")}
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:block justify-items-center">
            <OrangeButton
              buttonText={t("theSkillsButton")}
              buttonLink={"https://forms.gle/Nc6BevqpcBNDHqQVA"}
              buttonMargin=""
              buttonPadding="md:px-[40px] px-4 py-2.5"
            />
          </div>
        </div>
        <div className="hidden md:grid lg:col-span-1 xl:col-span-3 justify-items-center items-center lg:items-start md:pl-8">
          <img className="lg:w-4/5 xl:w-auto" src="/theSkill.png" />
        </div>
      </div>
    </SectionLayout>
  )
}
