import React from "react"
import SectionLayout from "@/layouts/SectionLayout"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import imgEasiestWay from "@/public/theEasiestWay.png"

const TheEasiestWaySection = () => {
  const { t } = useTranslation("academy")

  return (
    <SectionLayout sectionBackground="bg-desmos-background-secondary">
      <div className="lg:hidden block mt-20 md:mt-24">
        <h2 className="font-semibold text-desmos-primary text-[24px] md:text-[32px] lg:text-[40px] tracking-[0.005em] lg:tracking-normal">
          {t("theEasiestWayTitle")}
        </h2>
        <h3 className="text-desmos-primary text-[20px] md:text-[26px] lg:text-[32px] tracking-[0.005em]">
          {t("theEasiestWaySubtitle")}
        </h3>
      </div>
      <div className="md:grid md:grid-cols-4 lg:grid-cols-12 xl:grid-cols-6 mt-[38px] md:mt-[45px] lg:mt-[99px] xl:mt-[86px]">
        <div className="md:hidden grid grid-cols-2 mb-[60px]">
          <div></div>
          <Image src={imgEasiestWay} alt="Icon" />
        </div>
        <div className="md:col-span-3 lg:col-span-9 xl:col-span-3 xl:pr-16">
          <h2 className="hidden lg:block font-semibold text-desmos-primary text-[24px] md:text-[32px] lg:text-[40px] tracking-[0.005em] lg:tracking-normal">
            {t("theEasiestWayTitle")}
          </h2>
          <h3 className="hidden lg:block text-desmos-primary text-[20px] md:text-[26px] lg:text-[32px] tracking-[0.005em]">
            {t("theEasiestWaySubtitle")}
          </h3>
          <div className="md:pr-[76px] lg:pr-0 tracking-[0.005em] text-desmos-black-light text-[14px] md:text-[16px] lg:text-[18px] md:leading-[32px] leading-[24px] lg:leading-[36px] lg:mt-[74px]">
            <div className="mb-[20px] md:mb-[26px] lg:mb-[32x]">
              {t("theEasiestWayContent01a")}
              <span className="font-semibold">
                {t("theEasiestWayContent01b")}
              </span>
              {t("theEasiestWayContent01c")}
            </div>
            {t("theEasiestWayContent02a")}
            <div className="ml-[22px] md:ml-[32px] lg:mb-[74px] mb-[40px]">
              <ul className="list-disc">
                <li>{t("theEasiestWayContent02b")}</li>
                <li>{t("theEasiestWayContent02c")}</li>
                <li>{t("theEasiestWayContent02d")}</li>
              </ul>
            </div>
            <div>{t("theEasiestWayContent03")}</div>
          </div>
        </div>
        <div className="hidden md:grid lg:col-span-3 xl:col-span-3 justify-items-center items-center lg:items-start md:pl-8">
          <Image src={imgEasiestWay} alt="Icon" />
        </div>
      </div>
    </SectionLayout>
  )
}

export default TheEasiestWaySection
