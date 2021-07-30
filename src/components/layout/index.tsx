import React from "react";
// import Logo from '@assets/big-dipper-red.svg';
import Link from "next/link";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import { Languages, Footer, NavBar } from "./components";
import { useGetStyles } from "./styles";
import SocialMedia from "../social_media";

export interface LayoutProps {
  children: any;
  className: string;
  color?: string;
  navColor?: string;
  mobileNavColor?: string;
}

const Layout = (props: LayoutProps) => {
  const { children, className, color, navColor, mobileNavColor } = props;
  const { t, lang } = useTranslation();
  // const { t } = useTranslation(["home", "common"]);
  const { classes } = useGetStyles();
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
  const description = t("headDescription");
  const imageUrl = `${baseUrl}/images/desmos.png`;

  return (
    <>
      {/* ============================= */}
      {/* SEO */}
      {/* ============================= */}
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type,
          title,
          site_name: "Desmos",
          url: currentPath,
          description,
          images: [
            {
              url: imageUrl,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#da532c",
          },
          {
            name: "msapplication-config",
            content: `${baseUrl}/images/icons/browserconfig.xml`,
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
      />
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
          <NavBar />
        </div>
        {children}
        <div className="socials__container">
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
