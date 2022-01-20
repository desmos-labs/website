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
  const { t, lang } = useTranslation("common");
  const [loading, setLoading] = React.useState(false);
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const [address, setAddress] = React.useState("");
  const [verifyData, setVerifyData] = React.useState(null);
  const [dataStakingInfo, setDataStakingInfo] = React.useState(null);
  const [lpInfos, setLpInfos] = React.useState(null);
  const [error, setError] = React.useState(false);

  const verify = React.useCallback(async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://api.airdrop.desmos.network/users/${address}`
      );
      const { data } = result;
      setVerifyData(data);
      const { staking_infos, dsm_allotted, lp_infos } = data;
      setDataStakingInfo(staking_infos);
      setLpInfos(lp_infos);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  }, [address]);

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
      <Layout className={`${classes.root}`} logoURL="https://desmos.network">
        <Box
          display="flex"
          justifyContent="center"
          padding={isDesktop ? "40px 24px 40px" : "72px 32px 24px"}
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
                Are you ready to join them? Insert below your address and verify
                how many <strong>DSM</strong> have been allocated to you inside
                the currently active <strong>Desmos airdrop</strong>!
              </Typography>
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  verify();
                }}
              >
                <Typography style={{ padding: "0 16px" }}>
                  Please insert your address
                </Typography>{" "}
                <Box
                  display="flex"
                  flexDirection={isDesktop ? "row" : "column"}
                >
                  <TextField
                    error={error}
                    helperText={error ? "Invalid address" : undefined}
                    className={classes.searchBarStyle}
                    style={{
                      padding: isDesktop ? "0 0 16px 16px" : "0 16px 16px 16px",
                      width: isDesktop ? "70%" : "auto",
                    }}
                    fullWidth={isDesktop ? undefined : true}
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Cosmos/Kava/Regen... address"
                  />
                  <Box
                    padding={isDesktop ? 0 : "16px"}
                    width={isDesktop ? "20%" : "auto"}
                  >
                    <Button
                      type="submit"
                      fullWidth={isDesktop ? undefined : true}
                      variant="contained"
                      color="primary"
                      disableElevation={true}
                      style={{
                        backgroundColor: "rgba(237, 108, 83, 1)",
                        height: isDesktop ? "auto" : "2.5rem",
                        padding: isDesktop ? "16px 14px" : 0,
                        borderRadius: isDesktop ? "0px 4px 4px 0px" : "4px",
                        marginLeft: isDesktop ? "-1px" : 0,
                      }}
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size="24px" />
                      ) : (
                        "Calculate"
                      )}
                    </Button>
                  </Box>
                </Box>
              </form>
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
              {!error &&
              verifyData == null &&
              dataStakingInfo == null &&
              lpInfos == null ? (
                <Box>
                  <Staker />
                </Box>
              ) : null}
              {!error && verifyData != null && verifyData.dsm_allotted == 0 ? (
                <Box>
                  <Typography>
                    Unfortunately, looks like you have no DSM allotted to you.
                  </Typography>
                </Box>
              ) : null}

              {/* Data Result div/box: */}
              <Box
                display="flex"
                alignItems="center"
                flexDirection={isDesktop ? "row" : "column"}
              >
                {/* Left Box on Desktop view: DSM allocation with associated addresses */}
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  width={isDesktop ? "50%" : "100%"}
                >
                  {!error &&
                  verifyData != null &&
                  verifyData.dsm_allotted > 0 ? (
                    <Box>
                      <Typography>
                        <strong>Congratulations!</strong> You have been allotted
                      </Typography>
                      <Typography style={{ paddingLeft: "16px" }} variant="h3">
                        {verifyData.dsm_allotted} DSM
                      </Typography>
                    </Box>
                  ) : null}
                  {!error && dataStakingInfo ? (
                    <Box
                      display="flex"
                      alignSelf="baseline"
                      flexDirection="column"
                      width={isDesktop ? "50%" : "100%"}
                    >
                      {dataStakingInfo.map((item, key) => {
                        const chain = item.chain_name;

                        return (
                          <Box
                            display="flex"
                            flexDirection="row"
                            pl="16px"
                            pt="16px"
                            key={key}
                          >
                            <Box pr="8px">
                              <TickIcon />
                            </Box>
                            <Box display="flex" flexDirection="column">
                              <Box
                                display="flex"
                                flexDirection={isDesktop ? "row" : "column"}
                              >
                                <Typography
                                  style={{
                                    color: "rgba(237, 108, 83, 1)",
                                    padding: 0,
                                  }}
                                >
                                  {chain} Staker{" "}
                                  {item.forbole_delegator
                                    ? "& Forbole Delegator"
                                    : null}
                                  <Typography
                                    style={{
                                      display: "inline",
                                      color: "rgba(0, 0, 0, 1)",
                                      padding: 0,
                                      paddingLeft: isDesktop ? "16px" : "8px",
                                    }}
                                  >
                                    {item.dsm_allotted} DSM
                                  </Typography>
                                </Typography>
                              </Box>

                              <Box
                                style={{
                                  backgroundColor: "rgba(232, 232, 232, 0.5)",
                                  borderRadius: "16px",
                                  width: "min-content",
                                }}
                                py="5px"
                                px="8px"
                              >
                                <Typography
                                  style={{
                                    color: "#3D3D3D",
                                    fontSize: isDesktop ? "14px" : "10px",
                                    padding: 0,
                                  }}
                                >
                                  {item.address}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  ) : null}
                  {!error && lpInfos ? (
                    <Box
                      display="flex"
                      alignSelf="baseline"
                      flexDirection="column"
                      width={isDesktop ? "50%" : "100%"}
                    >
                      {lpInfos.map((item, key) => {
                        const chain = item.chain_name;
                        return (
                          <Box
                            display="flex"
                            flexDirection="row"
                            pl="16px"
                            pt="16px"
                            key={key}
                          >
                            <Box pr="8px">
                              <TickIcon />
                            </Box>
                            <Box>
                              <Typography
                                style={{
                                  color: "rgba(237, 108, 83, 1)",
                                  padding: 0,
                                }}
                              >
                                {chain} LP Staker
                                <Typography
                                  style={{
                                    display: "inline",
                                    color: "rgba(0, 0, 0, 1)",
                                    padding: 0,
                                    paddingLeft: isDesktop ? "16px" : "8px",
                                  }}
                                >
                                  {item.dsm_allotted} DSM
                                </Typography>
                              </Typography>
                              <Box
                                style={{
                                  backgroundColor: "rgba(232, 232, 232, 0.5)",
                                  borderRadius: "16px",
                                  width: "min-content",
                                }}
                                py="5px"
                                px="8px"
                              >
                                <Typography
                                  style={{
                                    color: "#3D3D3D",
                                    fontSize: isDesktop ? "14px" : "10px",
                                    padding: 0,
                                  }}
                                >
                                  {item.address}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  ) : null}
                </Box>
                {/* Right Box on Desktop view: Info with how-to banners */}
                <Box
                  display="flex"
                  position={isDesktop ? "absolute" : undefined}
                  right={isDesktop ? "20px" : undefined}
                  alignItems="flex-start"
                  flexDirection="column"
                  width={isDesktop ? "50%" : "100%"}
                  pl="16px"
                >
                  {!error &&
                  verifyData !== null &&
                  verifyData.dsm_allotted > 0 ? (
                    <>
                      <Typography style={{ padding: "20px 0" }}>
                        <strong>Claim Your DSM Airdrop</strong>
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="row"
                        // width={isDesktop ? "50%" : "100%"}
                      >
                        <a
                          href={"https://dpm.desmos.network/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <DPMIcon />
                        </a>
                        <a
                          href={
                            "https://medium.com/desmosnetwork/how-to-claim-your-dsm-airdrop-with-dpm-8de80cbbfe3f"
                          }
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "rgba(237, 108, 83, 1)",
                            paddingLeft: "5px",
                          }}
                        >
                          How to
                        </a>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="row"
                        pt="8px"
                      >
                        <a
                          href={"https://x.forbole.com/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <XIcon />
                        </a>
                        <a
                          href={
                            "https://medium.com/desmosnetwork/how-to-claim-dsm-airdrop-with-forbole-x-5d6d84e27cb4"
                          }
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "rgba(237, 108, 83, 1)",
                            paddingLeft: "5px",
                          }}
                        >
                          How to
                        </a>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="row"
                        pt="8px"
                      >
                        <a
                          href={"https://go-find.me/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GoFindMeIcon />
                        </a>
                      </Box>
                    </>
                  ) : null}
                </Box>
              </Box>
              {/* {!error && verifyData !== null && verifyData.dsm_allotted > 0 ? (
                <Box>
                  <Typography>
                    Claiming your amount is as easy as creating your Desmos
                    profile and connecting it to all your eligible addresses! To
                    know more please visit{" "}
                    <a
                      href="https://medium.com/desmosnetwork"
                      style={{
                        color: "rgba(237, 108, 83, 1)",
                      }}
                    >
                      our Medium page
                    </a>
                    .
                  </Typography>
                </Box>
              ) : null}
              {!error && verifyData !== null ? (
                <Box>
                  <Typography>
                    If you want to know more about the airdrop please check{" "}
                    <a
                      href="https://medium.com/desmosnetwork/announcing-dsm-airdrop-to-the-interchain-community-39d9837dcc5c"
                      style={{
                        color: "rgba(237, 108, 83, 1)",
                      }}
                    >
                      this link
                    </a>
                    .
                  </Typography>
                </Box>
              ) : null} */}
            </Box>

            {isDesktop && <AirdropParachuteDSM width="650px" height="700px" />}
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Airdrop;
