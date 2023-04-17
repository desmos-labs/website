import { NextSeo } from "next-seo"

function getPageSlur(pageRoute) {
  switch (true) {
    case !pageRoute:
      return ""
    case pageRoute.startsWith("/"):
      return pageRoute
    default:
      return `/${pageRoute}`
  }
}

export default function DesmosSeo({ title, description, pageRoute }) {
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
