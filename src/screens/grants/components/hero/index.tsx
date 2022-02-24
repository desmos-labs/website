import React from "react";
import { Box, ThemeProvider, Typography } from "@material-ui/core";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useStyles } from "./styles";
import DPMSlogan from "@assets/dpm-slogan.svg";
import { useGetScreenSizeHook } from "@hooks";
import { NextSeo } from "next-seo";

const GrantsHero = () => {
  const { t, lang } = useTranslation("common");
  // const { t } = useTranslation(["home", "common"]);
  const classes = useStyles();
  // const { networks } = useHomeHook();
  const { isDesktop } = useGetScreenSizeHook();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        // padding={isDesktop ? "40px 24px 0" : "72px 32px 24px"}
        height="100vh"
      ></Box>
    </>
  );
};

export default GrantsHero;
