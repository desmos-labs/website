/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, ThemeProvider, Typography } from "@material-ui/core";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useStyles } from "./styles";
import DPMSlogan from "@assets/dpm-slogan.svg";
import { useGetScreenSizeHook } from "@hooks";
import { NextSeo } from "next-seo";
import HeroIcon from "@assets/r-grants-hero-image.svg";

const GrantsHero = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop, isTablet } = useGetScreenSizeHook();

  return (
    <>
      <Box className={classes.container}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          padding={isDesktop ? "40px 24px 0" : "72px 32px 24px"}
          height="100vh"
        >
          <Box width="100%">
            <Typography
              variant="h1"
              style={{ display: "block" }}
              className={classes.h1}
            >
              Desmos
            </Typography>
          </Box>
          <Box width="100%">
            <Typography variant="h1" className={classes.h1}>
              Grant Programme
            </Typography>
          </Box>
          <Box pt="12px">
            <Typography variant="body1" className={classes.p}>
              Offering grants for projects, contributions and community
              expansions that will ultimately enrich the Desmos ecosystem and
              community
            </Typography>
          </Box>
          <Box pt="12px">
            <Button
              variant="contained"
              component="a"
              target="_blank"
              href={
                "https://docs.google.com/forms/d/1cjrQd89_4y2h9BrbvJhZJ_ZwP_4pi9Qh759V6SjG29w/"
              }
              className={classes.button}
            >
              APPLY NOW
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.heroIconBox}>
        <img
          src="/images/desktop-granta-hero-image.png"
          alt="Hero Image"
        />
      </Box>
    </>
  );
};

export default GrantsHero;
