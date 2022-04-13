import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { Layout, Staker } from "@components";
import { useGetStyles } from "./styles";
import AirdropSlogan from "@assets/airdrop-slogan-mobile.svg";
import AirdropDesktopSlogan from "@assets/airdrop-slogan-desktop.svg";
import TickIcon from "@assets/tick.svg";
import AirdropParachuteDSM from "@assets/airdrop-dsm.svg";
import DPMIcon from "@assets/dpm.svg";
import XIcon from "@assets/x.svg";
import GoFindMeIcon from "@assets/go-find-me.svg";
import { useGetScreenSizeHook } from "@hooks";
import { NextSeo } from "next-seo";
import Counter from "./counter";

const Airdrop = () => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();

  return (
    <>
      <NextSeo
        title="DSM Airdrop"
        description="Insert below your address and verify how many DSM have been allocated to you inside the upcoming Desmos airdrop"
        canonical="https://airdrop.desmos.network/"
        openGraph={{
          url: "https://airdrop.desmos.network/",
          title: "DSM Airdopr",
          description:
            "Insert below your address and verify how many DSM have been allocated to you inside the upcoming Desmos airdrop",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/images/desmos.png`,
            },
          ],
          site_name: "DSM Airdrop",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Layout
        className={`${classes.root}`}
        logoURL="https://desmos.network"
        airdropPage
      >
        <Box
          display="flex"
          justifyContent="center"
          padding={isDesktop ? "80px 24px 80px" : "72px 32px 24px"}
        >
          <Box className="dpm-page__container">
            <Box
              width={isDesktop ? "70%" : "100%"}
              className="dpm-page__left-container"
            >
              {isDesktop ? (
                <AirdropDesktopSlogan />
              ) : (
                <>
                  <AirdropSlogan />
                  <Box display="flex" justifyContent="center">
                    <AirdropParachuteDSM width="300px" height="355px" />
                  </Box>
                </>
              )}

              <Counter />

              <Typography style={{ lineHeight: "24px" }}>
                The airdrop has ended on <strong>February 25th 2022</strong>.<br/>
                Thank you everyone who took part to it!
              </Typography>
              <Typography style={{ lineHeight: "24px" }}>
                If you are interested in purchasing <strong>DSM</strong>,
                you can do so on <a href="https://app.osmosis.zone/?from=OSMO&to=DSM">Osmosis</a>.
              </Typography>

              <Box padding="16px">
                <a
                  href={
                    "https://medium.com/desmosnetwork/announcing-dsm-airdrop-to-the-interchain-community-39d9837dcc5c"
                  }
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "rgba(237, 108, 83, 1)",
                    paddingRight: "16px",
                  }}
                >
                  DSM Airdrop Criteria
                </a>
                <a
                  href={
                    "https://medium.com/desmosnetwork/desmos-airdrop-faqs-d5107dd34f17"
                  }
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "rgba(237, 108, 83, 1)" }}
                >
                  FAQs
                </a>
              </Box>
            </Box>

            {isDesktop && <AirdropParachuteDSM width="650px" height="700px" />}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Airdrop;
