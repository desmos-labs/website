import React from "react"
import Image from "next/image"
import { StaticImageData } from "next/dist/client/image"

interface Props {
  readonly buttonLink: string
  readonly buttonImage: string | StaticImageData
  readonly buttonAlt: string
  readonly buttonClass?: string
  readonly wrapperClass?: string
}

const StoreButton = ({
  buttonLink,
  buttonImage,
  buttonAlt,
  buttonClass,
  wrapperClass,
}: Props) => {
  return (
    <a href={buttonLink} target="_blank" className={wrapperClass}>
      <Image className={buttonClass} src={buttonImage} alt={buttonAlt} />
    </a>
  )
}

export default StoreButton
