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
import { Layout, SocialMedia } from "@components";
import { useGetStyles } from "./styles";
import AirdropSlogan from "@assets/airdrop-slogan-mobile.svg";
import AirdropDesktopSlogan from "@assets/airdrop-slogan-desktop.svg";
import TickIcon from "@assets/tick.svg";
import AirdropParachuteDSM from "@assets/airdrop-dsm.svg";
import { useGetScreenSizeHook } from "@hooks";

const Airdrop = () => {
  const { t, lang } = useTranslation("common");
  const [loading, setLoading] = React.useState(false);
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const [address, setAddress] = React.useState("");
  const [verifyData, setVerifyData] = React.useState(null);
  const [dataStakingInfo, setDataStakingInfo] = React.useState(null);
  const [error, setError] = React.useState(false);

  const verify = React.useCallback(async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://api.airdrop.desmos.network/users/${address}`
      );
      const { data } = result;
      setVerifyData(data);
      const { staking_infos, dsm_allotted } = data;
      setDataStakingInfo(staking_infos);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  }, [address]);

  return (
    <Layout className={`${classes.root}`}>
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
              <AirdropDesktopSlogan />
            ) : (
              <>
                <AirdropSlogan />
                <Box display="flex" justifyContent="center">
                  <AirdropParachuteDSM width="300px" height="355px" />
                </Box>
              </>
            )}

            <Typography style={{ lineHeight: "24px" }}>
              Insert below your address and verify how many <strong>DSM</strong>{" "}
              have been allocated to you inside the upcoming{" "}
              <strong>Desmos airdrop</strong>
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
              <Box display="flex" flexDirection={isDesktop ? "row" : "column"}>
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
            {verifyData !== null && (
              <Box>
                <Typography>The allocated DSM amount is</Typography>
                <Typography style={{ paddingLeft: "16px" }} variant="h3">
                  {verifyData.dsm_allotted} DSM
                </Typography>
              </Box>
            )}
            {dataStakingInfo !== null && dataStakingInfo !== undefined ? (
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
                        <TickIcon />
                      </Box>
                      <Typography
                        style={{ color: "rgba(237, 108, 83, 1)", padding: 0 }}
                      >
                        {chain} Staker{" "}
                        {item.forbole_delegator ? "& Forbole Delegator" : null}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            ) : null}
          </Box>

          {isDesktop && <AirdropParachuteDSM width="650px" height="700px" />}
        </Box>
      </Box>
    </Layout>
  );
};

export default Airdrop;
