import React from "react";
import { Box, ThemeProvider, Typography } from "@material-ui/core";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useGetStyles } from "./styles";
import DPMSlogan from "@assets/dpm-slogan.svg";

const DPM = () => {
  const { t, lang } = useTranslation("common");
  // const { t } = useTranslation(["home", "common"]);
  const { classes } = useGetStyles();
  // const { networks } = useHomeHook();

  return (
    <Layout className={`${classes.root}`}>
      <Box display="flex" justifyContent="center" padding="40px 24px 0">
        <Box className="dpm-page__container">
          {/* <h1 className="hero__title">{t("title")}</h1>
           */}
          {/* <Hero /> */}
          <Box width="50%" className="dpm-page__left-container">
            {/* <h1>{t("oneProfile")}</h1>
          <h1>{t("forEverything")}</h1> */}
            <DPMSlogan />
            <Typography>
              The <strong>Desmos Profile Manager</strong> application is an
              all-in-one mobile app allowing you to create and manage your
              Desmos profile easily.
            </Typography>
            <Box className="dpm-downloads" display="flex" flexDirection="row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/testflight.png" alt="DPM Screenshot" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/google-play.png" alt="DPM Screenshot" />
            </Box>
          </Box>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dpm.png" alt="DPM Screenshot" />
        </Box>
      </Box>
    </Layout>
  );
};

export default DPM;