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
            url: `${process.env.NEXT_PUBLIC_HOST}/og-logo.webp`,
            width: 166,
            height: 40,
            alt: "Desmos Logo",
            type: "image/jpeg",
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