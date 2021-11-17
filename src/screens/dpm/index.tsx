import React from "react";
import { Box, ThemeProvider, Typography } from "@material-ui/core";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useGetStyles } from "./styles";
import DPMSlogan from "@assets/dpm-slogan.svg";
import { useGetScreenSizeHook } from "@hooks";
import { NextSeo } from "next-seo";

const DPM = () => {
  const { t, lang } = useTranslation("common");
  // const { t } = useTranslation(["home", "common"]);
  const { classes } = useGetStyles();
  // const { networks } = useHomeHook();
  const { isDesktop } = useGetScreenSizeHook();

  return (
    <>
      <NextSeo
        title="DPM website"
        description="The Desmos Profile Manager application is an all-in-one mobile app allowing you to create and manage your Desmos profile easily."
        canonical="https://dpm.desmos.network/"
        openGraph={{
          url: "https://dpm.desmos.network/",
          title: "DPM website",
          description:
            "The Desmos Profile Manager application is an all-in-one mobile app allowing you to create and manage your Desmos profile easily.",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/images/desmos.png`,
            },
          ],
          site_name: "DPM website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Layout className={`${classes.root}`} logoURL="https://desmos.network" >
        <Box
          display="flex"
          justifyContent="center"
          padding={isDesktop ? "40px 24px 0" : "72px 32px 24px"}
        >
          <Box className="dpm-page__container">
            {/* <h1 className="hero__title">{t("title")}</h1>
             */}
            {/* <Hero /> */}
            <Box
              width={isDesktop ? "50%" : "100%"}
              className="dpm-page__left-container"
            >
              {/* <h1>{t("oneProfile")}</h1>
          <h1>{t("forEverything")}</h1> */}
              <DPMSlogan
                width={isDesktop ? 573 : 300}
                height={isDesktop ? 162 : 80}
              />
              <Typography>
                The <strong>Desmos Profile Manager</strong> application is an
                all-in-one mobile app allowing you to create and manage your
                Desmos profile easily.
              </Typography>
              {isDesktop && (
                <Box
                  className="dpm-downloads"
                  display="flex"
                  flexDirection="row"
                  pl="16px"
                >
                  <a
                    href="https://testflight.apple.com/join/cdgaOHai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/testflight.png" alt="DPM Screenshot" />
                  </a>
                  <a
                    href="https://play.google.com/apps/testing/network.desmos.dpm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/google-play.png" alt="DPM Screenshot" />
                  </a>
                </Box>
              )}
            </Box>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{ width: "350px" }}
              src="/images/dpm.png"
              alt="DPM Screenshot"
            />
            <Box
              style={{ display: isDesktop ? "none" : "flex" }}
              display="flex"
              flexDirection="column"
              className="dpm-mobile"
            >
              <a
                href="https://testflight.apple.com/join/cdgaOHai"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/testflight.png" alt="DPM Screenshot" />
              </a>
              <a
                href="https://play.google.com/apps/testing/network.desmos.dpm"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/google-play.png" alt="DPM Screenshot" />
              </a>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default DPM;
