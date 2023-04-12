import {NextSeo} from "next-seo";

export default function DesmosSeo({ url, title, description }) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        description: description,
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