import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import LinkButton from "components/button-link"

export default function OurChainSection (){
    const { t } = useTranslation("ecosystem")
    const buttons = [
      {
        id: 1,
        title: "ourChainsButton01",
        link: "https://bigdipper.live/desmos",
        margin: "xl:mr-[126px]",
      },
      {
        id: 2,
        title: "ourChainsButton02",
        link: "https://www.mintscan.io/desmos",
        margin: "xl:mr-[126px]",
      },
      {
        id: 3,
        title: "ourChainsButton03",
        link: "https://ping.pub/desmos",
        margin: "xl:mr-[126px]",
      },
      {
        id: 4,
        title: "ourChainsButton04",
        link: "https://morpheus.desmos.network/",
        margin: "xl:mr-[126px]",
      },
    ]
    return(
      <div className="text-white mt-[60px] md:mt-[80px] lg:mt-[120px] ">
      <h2 className="font-semibold text-[18px] md:text-[22px] lg:text-[24px]">
          {t("ourChainsTitle")}
      </h2>
      <div className="xl:max-w-[1440px] px-[32px] md:px-[42px] py-[50px] lg:py-[40px] rounded-[8px] bg-[#7D747433] grid md:grid-cols-2 lg:grid-cols-3 xl:block lg:gap-5 lg:gap-y-[36px] gap-4 gap-y-[44px] mt-[16px] md:mt-[24px]">
          {buttons.map((button) => {
          return (
              <LinkButton key={button.id} title={button.title} link={button.link} margin={button.margin}/>
          )
          })}
      </div>
      </div>
    )
}
