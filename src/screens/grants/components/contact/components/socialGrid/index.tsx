import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import { useGetScreenSizeHook } from "@hooks";
import { Box, Button, ThemeProvider, Typography } from "@material-ui/core";
import { GRANTS_FORM } from '@api';
import DiscordIcon from "@assets/discord.svg";
import EmailIcon from "@assets/email.svg";

const SocialGrid = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <Box className={classes.grid}>
      <Box className={classes.grid1}>
        {/* <Box className={classes.card}> */}
        <Button
          variant="contained"
          component="a"
          target="_blank"
          href={"https://discord.com/invite/ckFcU5vxxc"}
          className={classes.card}
        >
          <DiscordIcon
            width={isDesktop ? "72px" : "36px"}
            height={isDesktop ? "72px" : "36px"}
          />
        </Button>
        {/* </Box> */}
      </Box>
      <Box className={classes.grid2}>
        {/* <Box className={classes.card}> */}
        <Button
          variant="contained"
          component="a"
          href={"mailto: grants@desmos.network"}
          className={classes.card}
        >
          <EmailIcon
            width={isDesktop ? "72px" : "36px"}
            height={isDesktop ? "72px" : "36px"}
          />
        </Button>
        {/* </Box> */}
      </Box>
      <Box className={classes.grid3}>
        {/* <Box className={classes.button}> */}
        <Button
          variant="contained"
          component="a"
          target="_blank"
          href={GRANTS_FORM}
          className={classes.button}
        >
          APPLY NOW
        </Button>
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default SocialGrid;
