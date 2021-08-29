import React from "react";
import dynmaic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import { MobileCarousel } from "./components";

// const Desktop = dynamic(() => import('./components/desktop'));

const Supply = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop, windowSize } = useGetScreenSizeHook();
  const screenWidth = windowSize.width;
  return (
    <div className={classes.root}>
      <>
        {isDesktop ? (
          // <Desktop
          //   className={classes.desktop}
          //   title={title}
          // />
          <></>
        ) : (
          <MobileCarousel className={classes.mobile} />
        )}
      </>
    </div>
  );
};

export default Supply;
