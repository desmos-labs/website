import React from "react";
import { Box, ThemeProvider, Typography } from "@material-ui/core";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { GrantsHero, Categories, Contact } from "./components";
import { useStyles } from "./styles";
import DPMSlogan from "@assets/dpm-slogan.svg";
import { useGetScreenSizeHook } from "@hooks";
import { NextSeo } from "next-seo";

const Grants = () => {
  const { t, lang } = useTranslation("common");
  // const { t } = useTranslation(["home", "common"]);
  const classes = useStyles();
  // const { networks } = useHomeHook();
  const { isDesktop } = useGetScreenSizeHook();

  return (
    <>
      <NextSeo
        title="Desmos Grants website"
        description="The Desmos Profile Manager application is an all-in-one mobile app allowing you to create and manage your Desmos profile easily."
        canonical="https://desmos.network/grants"
        openGraph={{
          url: "https://desmos.network/grants",
          title: "DPM website",
          description:
            "The Desmos Profile Manager application is an all-in-one mobile app allowing you to create and manage your Desmos profile easily.",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/images/desmos.png`,
            },
          ],
          site_name: "Desmos Grants website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Layout
        className={`${classes.root}`}
        logoURL="/"
      >
        <Box className={classes.section}>
          <GrantsHero />
        </Box>
        <Box className={classes.section}>
          <Categories />
        </Box>
        <Box className={classes.section}>
          <Contact />
        </Box>
      </Layout>
    </>
  );
};

export default Grants;
