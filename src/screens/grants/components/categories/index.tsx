import React from "react";
import { Box, Button, ThemeProvider, Typography } from "@material-ui/core";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import cardItems from "./util";
import { Card } from "./components";

const Categories = () => {
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();

  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
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
            Categories
          </Typography>
        </Box>
        <Box className={classes.grid}>
          {cardItems.map((item, y) => (
            <Card
              key={y}
              icon={item.icon}
              title={item.title}
              details={item.details}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
