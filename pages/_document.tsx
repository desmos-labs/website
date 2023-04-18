import React from "react"
import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#141419" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-desmos-background-primary select-none h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
