import React from "react"
import { useTranslation } from "next-i18next"
import LinkButton from "@/components/LinkButton"
import LinkCardButton from "@/components/LinkCardButton";

const SDKSection = () => {
  const { t } = useTranslation("ecosystem")
  const buttons = [
    {
      id: 1,
      image: "/DesmosCore.svg",
      title: "desmosCore",
      content: "desmosCoreContent",
      link: "https://github.com/desmos-labs/desmos",
    },
    {
      id: 2,
      image: "/DesmJS.svg",
      title: "desmJS",
      content: "desmJSContent",
      link: "https://github.com/desmos-labs/desmjs",
    },
    {
      id: 3,
      image: "/ContractsBindings.svg",
      title: "desmosBindings",
      content: "desmosBindingsContent",
      link: "https://github.com/desmos-labs/contracts-bindings",
    },
    {
      id: 4,
      image: "/Athena.svg",
      title: "athena",
      content: "athenaContent",
      link: "https://github.com/desmos-labs/djuno",
    },
    {
      id: 5,
      image: "/Caerus.svg",
      title: "caerus",
      content: "caerusContent",
      link: "https://github.com/desmos-labs/caerus",
    },
  ]
  return (
    <div className="text-white mt-[60px] md:mt-[80px] lg:mt-[120px] ">
      <h2 className="md:tracking-[0.0015em] tracking-[-0.015em] font-semibold text-[18px] md:text-[22px] lg:text-[24px]">
        {t("SDKTitle")}
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

export default SDKSection
