import { Box, Typography } from "@material-ui/core";
import { useSubscription } from "@apollo/client";
import {
  client,
  PROFILES_SUBSCRIPTION,
  LINKS_SUBSCRIPTION,
} from "./apis/apollo";
import { formatCrypto } from "@src/utils/formatter";
import { useGetScreenSizeHook } from "@hooks";

const Counter = () => {
  const profilesResult = useSubscription(PROFILES_SUBSCRIPTION);
  const linksResult = useSubscription(LINKS_SUBSCRIPTION);
  const { isDesktop } = useGetScreenSizeHook();

  if (profilesResult.loading || linksResult.loading) {
    return <p>Loading...</p>;
  }

  if (profilesResult.error || linksResult.error) {
    console.log(profilesResult.error);
    console.log(linksResult.error);
    return <p>Error!</p>;
  }

  const profilesCount = profilesResult.data.profile_aggregate.aggregate.count;
  const linksCount = linksResult.data.chain_link_aggregate.aggregate.count;
  return (
    <Box
      display="grid"
      style={{
        gridGap: isDesktop ? "40px" : "20px",
        gridTemplateColumns: isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
      }}
      pb="20px"
    >
      <Box
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.1)",
        }}
        padding="16px"
      >
        <Typography
          style={{ lineHeight: "24px", padding: 0, paddingBottom: "16px" }}
        >
          Created Profiles
        </Typography>
        <Typography
          variant="h1"
          style={{ color: "rgba(255, 104, 74, 1)", paddingBottom: 0 }}
        >
          {formatCrypto(profilesCount)}
        </Typography>
      </Box>
      <Box
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          boxShadow: "0px 2px 30px rgba(0, 0, 0, 0.1)",
        }}
        padding="16px"
      >
        <Typography
          style={{ lineHeight: "24px", padding: 0, paddingBottom: "16px" }}
        >
          Connected Accounts
        </Typography>
        <Typography
          variant="h1"
          style={{ color: "rgba(255, 104, 74, 1)", paddingBottom: 0 }}
        >
          {formatCrypto(linksCount)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Counter;
