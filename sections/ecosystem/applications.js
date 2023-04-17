import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import LinkCardButton from "components/button-link-card"

export default function ApplicationsSection() {
  const { t } = useTranslation("ecosystem")
  const buttons = [
    {
      id: 1,
      title: "applicationsButtonTitle01",
      image: "/goFindMe.png",
      content: "applicationsButtonContent01",
      link: "https://go-find.me/"
    },
    {
      id: 2,
      title: "applicationsButtonTitle02",
      image: "/scripta.png",
      content: "applicationsButtonContent02",
      link: "https://scripta.network/"
    },
    {
      id: 3,
      title: "applicationsButtonTitle03",
      image: "/butter.png",
      content: "applicationsButtonContent03",
      link: "https://butter.social"
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
            <div className="md:col-span-1">
              <LinkCardButton key={button.id} image={button.image} title={button.title} content={button.content} link={button.link}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
