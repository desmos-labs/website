import React from "react"
import { useTranslation } from "next-i18next"
import LinkCardButton from "@/components/LinkCardButton"

const ApplicationsSection = () => {
  const { t } = useTranslation("ecosystem")
  const buttons = [
    {
      id: 1,
      title: "goFindMeTitle",
      image: "/goFindMe.png",
      content: "goFindMeContent",
      link: "https://go-find.me/",
    },
    {
      id: 2,
      title: "scriptaTitle",
      image: "/scripta.png",
      content: "scriptaContent",
      link: "https://scripta.network/",
    },
    {
      id: 3,
      title: "butterTitle",
      image: "/butter.png",
      content: "butterContent",
      link: "https://butter.social",
    },
  ]
  return (
    <div className="text-white mt-[60px] md:mt-[80px] lg:mt-[120px] ">
      <h2 className="md:tracking-[0.0015em] tracking-[-0.015em] font-semibold text-[18px] md:text-[22px] lg:text-[24px]">
        {t("applicationsTitle")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[24px] md:gap-[18px] gap-4 mt-[16px] md:mt-[24px] xl:max-w-[1407px]">
        {buttons.map((button) => {
          return (
            <div className="md:col-span-1" key={button.id}>
              <LinkCardButton
                key={button.id}
                image={button.image}
                title={button.title}
                content={button.content}
                link={button.link}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ApplicationsSection
