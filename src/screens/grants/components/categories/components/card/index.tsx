import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import { useGetScreenSizeHook } from "@hooks";
import { Box, Button, ThemeProvider, Typography } from "@material-ui/core";

export interface ICardProps {
  icon: any;
  title: string;
  details: string;
}

const Card = (props: ICardProps) => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const { icon, title, details } = props;
  const Svg = icon;
  return (
    <Box className={classes.card}>
      <Svg height={isDesktop ? 100 : 64} width={isDesktop ? 88 : 72} />
      <Typography className={classes.h3}>{title}</Typography>
      <Typography variant="body1" className={classes.p}>
        {details}
      </Typography>
    </Box>
  );
};

export default Card;
