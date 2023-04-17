import { useTranslation } from "next-i18next"
import Image from "next/image"

export default function CompleteToolkitButton({ button }) {
  const { t } = useTranslation("index")

  return (
    <div
      className={`complete-toolkit-btn-stroke-gradient relative
                text-desmos-black-light text-[14px] md:text-[16px]
                xl:w-[222px] xl:h-[309px]
                lg:w-[189px] lg:h-[264px]
                md:h-[291px] w-full h-[85px]
                xl:py-[84px] lg:py-[61px] md:py-[75px] py-[23px]
                px-[60px] md:px-0
                rounded-[12px] border-2 border-white/20 md:border-0
                bg-[#7D7474]/20
                grid md:justify-items-center justify-items-start content-center
                transition-all ease-out duration-300
                hover:cursor-pointer hover:bg-[#141419]/80 mb-[9px] md:mb-0
            `}
    >
      <span className="block md:hidden leading-[35px]">
        <Image
          className="inline-block w-[38px] h-auto mr-8"
          src={button.buttonImage}
          alt="Image"
          width={81}
          height={86}
        />
        <span className="leading-[21px] tracking-[0.0025em]">
          {t(button.title)}
        </span>
      </span>
      <Image
        className="hidden md:block"
        src={button.buttonImage}
        alt="Image"
        width={81}
        height={86}
      />
      <span className="hidden md:block md:pt-[32px] md:whitespace-pre-wrap text-center leading-[22px] tracking-[0.005em]">
        {t(button.title)}
      </span>
    </div>
  )
}
