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
import {Layout, SocialMedia} from "@components";
import {useGetStyles} from "./styles";
import AirdropSlogan from "@assets/airdrop-slogan-mobile.svg";
import AirdropDesktopSlogan from "@assets/airdrop-slogan-desktop.svg";
import TickIcon from "@assets/tick.svg";
import AirdropParachuteDSM from "@assets/airdrop-dsm.svg";
import {useGetScreenSizeHook} from "@hooks";
import {NextSeo} from "next-seo";
import {ApolloProvider} from "@apollo/client";
import Counter from "@screens/airdrop/counter";
import {client} from "./apis/apollo";

const Airdrop = () => {
  const {t, lang} = useTranslation("common");
  const [loading, setLoading] = React.useState(false);
  const {classes} = useGetStyles();
  const {isDesktop} = useGetScreenSizeHook();
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
      const {data} = result;
      setVerifyData(data);
      const {staking_infos, dsm_allotted, lp_infos} = data;
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
    <ApolloProvider client={client}>
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
          padding={isDesktop ? "40px 24px 0" : "72px 32px 24px"}
        >
          <Box className="dpm-page__container">
            <Box
              width={isDesktop ? "50%" : "100%"}
              className="dpm-page__left-container"
            >
              {isDesktop ? (
                <AirdropDesktopSlogan/>
              ) : (
                <>
                  <AirdropSlogan/>
                  <Box display="flex" justifyContent="center">
                    <AirdropParachuteDSM width="300px" height="355px"/>
                  </Box>
                </>
              )}

              <Counter/>

              <Typography style={{lineHeight: "24px"}}>
                Are you ready to join them? Insert below your address and verify how many{" "}
                <strong>DSM</strong> have been allocated to you inside the currently active{" "}
                <strong>Desmos airdrop</strong>!
              </Typography>
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  verify();
                }}
              >
                <Typography style={{padding: "0 16px"}}>
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
                        <CircularProgress color="inherit" size="24px"/>
                      ) : (
                        "Calculate"
                      )}
                    </Button>
                  </Box>
                </Box>
              </form>
              {!error && verifyData != null && verifyData.dsm_allotted == 0 ? (
                <Box>
                  <Typography>Unfortunately, looks like you have no DSM allotted to you.</Typography>
                </Box>
              ) : null}
              {!error && verifyData != null && verifyData.dsm_allotted > 0 ? (
                <Box>
                  <Typography>Congratulations! You have been allotted</Typography>
                  <Typography style={{paddingLeft: "16px"}} variant="h3">
                    {verifyData.dsm_allotted} DSM
                  </Typography>
                </Box>
              ) : null}
              {!error && dataStakingInfo ? (
                <Box>
                  {dataStakingInfo.map((item, key) => {
                    const chain = item.chain_name;
                    // console.log(dataStakingInfo);
                    return (
                      <Box
                        display="flex"
                        flexDirection="row"
                        pl="16px"
                        pt="16px"
                        key={key}
                      >
                        <Box pr="8px">
                          <TickIcon/>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="column">
                          <Typography
                            style={{color: "rgba(237, 108, 83, 1)", padding: 0}}
                          >
                            {chain} Staker{" "}
                            {item.forbole_delegator
                              ? "& Forbole Delegator"
                              : null}
                          </Typography>
                          <Typography
                            style={{color: "#3D3D3D", fontSize: "14px", padding: 0}}>
                            Eligible address: {item.address}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              ) : null}
              {!error && lpInfos ? (
                <Box>
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
                          <TickIcon/>
                        </Box>
                        <Box>
                          <Typography
                            style={{color: "rgba(237, 108, 83, 1)", padding: 0}}
                          >
                            {chain} LP Staker
                          </Typography>
                          <Typography
                            style={{color: "#3D3D3D", fontSize: "14px", padding: 0}}>
                            Eligible address: {item.address}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              ) : null}
              {!error && verifyData !== null && verifyData.dsm_allotted > 0 ? (
                <Box>
                  <Typography>
                    Claiming your amount is as easy as creating your Desmos profile and{" "}
                    connecting it to all your eligible addresses! To know more please visit <a
                    href="https://medium.com/desmosnetwork"
                    style={{
                      color: "rgba(237, 108, 83, 1)"
                    }}
                  >our Medium page</a>.
                  </Typography>
                </Box>
              ) : null}
              {!error && verifyData !== null ? (
                <Box>
                  <Typography>
                    If you want to know more about the airdrop please check <a
                    href="https://medium.com/desmosnetwork/announcing-dsm-airdrop-to-the-interchain-community-39d9837dcc5c"
                    style={{
                      color: "rgba(237, 108, 83, 1)"
                    }}
                  >this link</a>.
                  </Typography>
                </Box>
              ) : null}
            </Box>

            {isDesktop && <AirdropParachuteDSM width="650px" height="700px"/>}
          </Box>
        </Box>
      </Layout>
    </ApolloProvider>
  );
};

export default Airdrop;
