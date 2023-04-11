import { useTranslation } from "next-i18next"

export default function ModuleButton({
  button,
  position,
  size,
  hoverSize,
  smallText,
  animationDelay,
}) {
  const { t } = useTranslation("index")

  return (
    <div
      className={`group
            ${position} ${hoverSize}
            lg:animate-modulesButtonBounce ${animationDelay} 
            absolute
            hover:cursor-pointer
            hover:translateY-0 hover:animate-none
            items-center grid justify-items-center
            text-desmos-black-light lg:tracking-[.005em] tracking-normal lg:text-[16px] ${
              smallText ? "text-[12px]" : "text-[14px]"
            }`}
    >
      <div
        className={`${size} hover:cursor-pointer lg:w-[140px] lg:h-[140px] group-hover:opacity-0 bg-modules-section-button bg-contain absolute transition-all ease-out duration-500 -z-1`}
      ></div>
      <div
        className={`${hoverSize} lg:w-[166px] lg:h-[176px] group-hover:opacity-100 bg-modules-section-button-hover bg-contain opacity-0 absolute transition-all ease-out duration-500 -z-10`}
      ></div>
      <span className="z-[9]">{t(button.title)}</span>
    </div>
  )
}
