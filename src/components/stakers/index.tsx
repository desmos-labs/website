import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  useTheme,
} from "@material-ui/core";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { networkKeys } from "./config";
import { getNetworkInfo } from "@src/utils/network_info";
import { useGetScreenSizeHook } from "@hooks";

const Stakers = () => {
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  //   const Svg = networkData.map((network) => network.image)
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
    >
      <Typography>Stakers of</Typography>
      <Box
        // pl={theme.spacing(1)}
        pl="0.5rem"
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        {networkData.map((y, i) => {
          const Svg = y.image;
          return (
            <Box key={i} mx={isDesktop ? "0.5rem" : "0.1rem"}>
              <Svg />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Stakers;
