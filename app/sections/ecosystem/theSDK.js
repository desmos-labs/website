import SectionLayout from "@/layouts/section"
import { useTranslation } from "next-i18next"
import LinkButton from "@/components/button-link"

export default function TheSDKSection (){
    const { t } = useTranslation("ecosystem")
    const buttons = [
      {
        id: 1,
        title: "SDKButton01",
        link: "https://docs.desmos.network/",
        margin: "xl:mr-[125px]",
      },
      {
        id: 2,
        title: "SDKButton02",
        link: "https://github.com/desmos-labs/desmos-contracts",
        margin: "xl:mr-[125px]",
      },
      {
        id: 3,
        title: "SDKButton03",
        link: "https://github.com/desmos-labs/desmos-bindings",
        margin: "xl:mr-[125px]",
      },
      {
        id: 4,
        title: "SDKButton04",
        link: "https://github.com/desmos-labs/desmjs",
        margin: "xl:mr-[125px]",
      },
      {
        id: 5,
        title: "SDKButton05",
        link: "https://github.com/desmos-labs/djuno",
        margin: "xl:mr-[125px]",
      },
    ]
    return(
      <div className="text-white mt-[60px] md:mt-[80px] lg:mt-[120px] ">
        <h2 className="md:tracking-[0.0015em] tracking-[-0.015em] font-semibold text-[18px] md:text-[22px] lg:text-[24px]">
            {t("SDKTitle")}
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