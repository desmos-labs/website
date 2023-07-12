import React, { useMemo } from "react"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"

export interface LinkCardButtonProps {
  readonly image: string
  readonly title: string
  readonly content: string
  readonly link: string
  readonly isExternal?: boolean
}

const LinkCardButton = (props: LinkCardButtonProps) => {
  const { image, title, content, link, isExternal } = props
  const { t } = useTranslation("ecosystem")

  const buttonContent = useMemo(() => {
    return (
      <div className="hover-gradient-shadow rounded-[8px] bg-[#141419] relative hover:cursor-pointer">
        <div className="w-full md:h-[385px] lg:h-[460px] xl:h-[424px] bg-[#7D747433] rounded-[8px] px-[20px] py-[40px] lg:px-[24px] lg:py-[48px]">
          <Image
            className="rounded-[20px]"
            src={image}
            color="white"
            alt="Button icon"
            width={80}
            height={80}
          />
          <h3 className="tracking-[0.0015em] mt-[16px] lg:mt-[24px] font-semibold text-[18px] md:text-[22px] lg:text-[24px] lg:leading-[36px] md:leading-[33px] leading-[36px] lg:mb-[16px]">
            {t(title)}
          </h3>
          <div className="tracking-[0.0015em] mt-[4px] lg:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[36px] md:leading-[32px] leading-[24px]">
            {t(content)}
          </div>
        </div>
      </div>
    )
  }, [content, image, t, title])

  return isExternal ? (
    <Link href={link}>{buttonContent}</Link>
  ) : (
    <a href={link} target="_blank">
      {buttonContent}
    </a>
  )
}

export default LinkCardButton
