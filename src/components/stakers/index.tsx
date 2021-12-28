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
import { networkKeys } from "./config";
import { getNetworkInfo } from "@src/utils/network_info";

const Stakers = () => {
  const networkData = networkKeys.map((x) => getNetworkInfo(x));
  //   const Svg = networkData.map((network) => network.image)
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Typography>Stakers of</Typography>
      {networkKeys.map((y) => y)}
    </Box>
  );
};

export default Stakers;
