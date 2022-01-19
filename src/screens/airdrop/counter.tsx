import { Box, Typography } from "@material-ui/core";
import { formatCrypto } from "@src/utils/formatter";
import { useGetScreenSizeHook } from "@hooks";
import { useStatHook } from "./hooks";

const Counter = () => {
  const { isDesktop } = useGetScreenSizeHook();
  const {
    error,
    claimedDSM,
    totalDSM,
    connectedAddresses,
    totalAddresses,
    createdProfiles,
    chainLinks,
  } = useStatHook();

  if (chainLinks === null) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p>Error!</p>;
  }

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
          style={{ lineHeight: "24px", padding: 0, paddingBottom: "8px" }}
        >
          Claimed DSM ({formatCrypto((claimedDSM / totalDSM) * 100)}%)
        </Typography>
        <Typography variant="h1" style={{ fontSize: "35px", paddingBottom: 0 }}>
          {formatCrypto(claimedDSM)} DSM
        </Typography>
        <Typography
          style={{
            lineHeight: "24px",
            padding: 0,
            paddingTop: "8px",
            paddingBottom: 0,
          }}
        >
          {formatCrypto(claimedDSM)} / {formatCrypto(totalDSM)}
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
          style={{ lineHeight: "24px", padding: 0, paddingBottom: "8px" }}
        >
          Claimed Address (
          {formatCrypto((connectedAddresses / totalAddresses) * 100)}%)
        </Typography>
        <Typography variant="h1" style={{ fontSize: "35px", paddingBottom: 0 }}>
          {formatCrypto(connectedAddresses)}
        </Typography>
        <Typography
          style={{
            lineHeight: "24px",
            padding: 0,
            paddingTop: "8px",
            paddingBottom: 0,
          }}
        >
          {formatCrypto(connectedAddresses)} / {formatCrypto(totalAddresses)}
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
          style={{ lineHeight: "24px", padding: 0, paddingBottom: "8px" }}
        >
          Created Profiles
        </Typography>
        <Typography
          variant="h1"
          style={{ color: "rgba(255, 104, 74, 1)", paddingBottom: 0 }}
        >
          {formatCrypto(createdProfiles)}
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
          style={{ lineHeight: "24px", padding: 0, paddingBottom: "8px" }}
        >
          Connected Accounts
        </Typography>
        <Typography
          variant="h1"
          style={{ color: "rgba(255, 104, 74, 1)", paddingBottom: 0 }}
        >
          {formatCrypto(chainLinks)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Counter;
