import React from "react";
// import Logo from '@assets/big-dipper-red.svg';
import Link from "next/link";
import Head from "next/head";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import { Languages, Footer, NavBar } from "./components";
import { useStyles } from "./styles";
import SocialMedia from "../social_media";
import AirdropBox from "../airdrop_box";

export interface LayoutProps {
  children: any;
  className: string;
  color?: string;
  navColor?: string;
  mobileNavColor?: string;
  logoURL?: string;
  airdropPage?: boolean;
  grants?: boolean;
  image?: string;
  twitterImage?: string;
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    className,
    color,
    navColor,
    mobileNavColor,
    logoURL,
    airdropPage,
    grants,
    image,
    twitterImage,
  } = props;
  const { t, lang } = useTranslation();
  // const { t } = useTranslation(["home", "common"]);
  const classes = useStyles({ grants: grants });
  // ============================
  // Meta Tags
  // ============================
  let baseUrl = process.env.NEXT_PUBLIC_URL;
  let currentPath = "";

  if (typeof window === "object") {
    baseUrl = window?.location?.origin;
    currentPath = window?.location?.href || "";
  }

  const title = "Desmos Network";
  const type = "website";
  const description =
    "A blockchain which serves as the backbone to empower the development of user-centric social networks.";
  const imageUrl = `${baseUrl}/images/desmos.png`;
  let ogImage = image ?? `${baseUrl}/static/icons/favicon-96x96.png`;
  let metaTwitterImage = twitterImage ?? ogImage;

  return (
    <>
      {/* ============================= */}
      {/* SEO */}
      {/* ============================= */}
      <Head>
        <title>{title}</title>
        {!!(baseUrl === "https://staging.forbole.com") && (
          <meta name="googlebot" content="noindex" />
        )}
        <meta name="description" content={description} />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:type"
          content={type}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content={title}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:site_name"
          content="Forbole"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content={`${baseUrl}${currentPath}`}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={description}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content={ogImage}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metaTwitterImage} />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${baseUrl}/static/icons/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${baseUrl}/static/icons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${baseUrl}/static/icons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${baseUrl}/static/icons/manifest.json`} />
      </Head>
      <div className={`${className} ${classes.root}`}>
        {/* ============================= */}
        {/* nav */}
        {/* ============================= */}
        <div className="nav__container">
          {/* <Link href="/"> */}
          {/* <a> */}
          {/* <Logo className="nav__logo" /> */}
          {/* hi logo */}
          {/* </a> */}
          {/* </Link> */}
          {/* <Languages color={color} /> */}
          <NavBar logoURL={logoURL || "/"} grants={grants} />
        </div>
        {children}
        {/* {airdropPage ? null : (
          <div className="airdrop__container">
            <AirdropBox />
          </div>
        )} */}

        <div className="socials__container">
          <SocialMedia />
        </div>
        <Footer baseURL={logoURL || "/"} />
      </div>
    </>
  );
};

export default Layout;
