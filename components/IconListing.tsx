import React from "react"
import Image from "next/image"

export interface IconListingProps {
  readonly iconTitle: string
  readonly iconDescription: string
  readonly imagePath: string
  readonly imageText: string
}

const IconListing = (props: IconListingProps) => {
  const { iconTitle, iconDescription, imagePath, imageText } = props
  return (
    <>
      <div className="flex flex-col w-full">
        <div>
          <Image
            className="max-w-[62px] md:w-[62px] w-[40px]"
            src={imagePath}
            alt={imageText}
            width={62}
            height={62}
          />
        </div>
        <div className="lg:mt-[22px] md:mt-[18px] mt-[16px]">
          <h3 className="font-semibold lg:text-[24px] md:text-[22px] text-[18px] lg:leading-[38px] md:leading-[33px] leading-[26px] tracking-[.0015em] pb-2">
            {iconTitle}
          </h3>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[36px] md:leading-[32px] leading-[24px] lg:tracking-[.0015em] md:tracking-[.005em] tracking-[.0015em]">
            {iconDescription}
          </p>
        </div>
      </div>
    </>
  )
}

export default IconListing
