import React from "react"
import { NextSeo } from "next-seo"
import getPageSlur from "@/utils/getPageSlur"

export interface DesmosSeoProps {
  readonly title: string
  readonly description: string
  readonly pageRoute?: string
}

const DesmosSeo = (props: DesmosSeoProps) => {
  const { title, description, pageRoute } = props

  const pageSlur = getPageSlur(pageRoute)
  const pageUrl = `${process.env.NEXT_PUBLIC_HOST}${pageSlur}`

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={pageUrl}
      openGraph={{
        type: "website",
        url: pageUrl,
        title,
        description,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_HOST}/desmos_cover.png`,
            width: 1500,
            height: 500,
            alt: "Desmos Cover picture",
            type: "image/png",
          },
        ],
        siteName: "Desmos",
      }}
      twitter={{
        handle: "@desmosnetwork",
        site: "@desmosnetwork",
        cardType: "summary_large_image",
      }}
    />
  )
}

export default DesmosSeo
