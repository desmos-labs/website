import React from "react";
import { Box, Button, ThemeProvider, Typography } from "@material-ui/core";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import { SocialGrid } from "./components";

const Contact = () => {
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();

  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={isDesktop ? "40px 24px 0" : "72px 32px 24px"}
        // height="100vh"
      >
        <Box width="100%">
          <Typography
            variant="h1"
            style={{ display: "block" }}
            className={classes.h1}
          >
            Contact Us!
          </Typography>
        </Box>
        <Box width="100%">
          <Typography
            variant="body1"
            style={{ display: "block" }}
            className={classes.p}
          >
            For any questions, don&apos;t hesitate to contact us, we look
            forward to know more about your projects!
          </Typography>
        </Box>
        <SocialGrid />
      </Box>
    </Box>
  );
};

export default Contact;
