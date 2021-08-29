import React from "react";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import { MobileCarousel } from "./components";

const Desktop = dynamic(() => import("./components/desktop"));

const Supply = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      <>
        {isDesktop ? (
          <Desktop className={classes.desktop} />
        ) : (
          <MobileCarousel className={classes.mobile} />
        )}
      </>
    </div>
  );
};

export default Supply;
