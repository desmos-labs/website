import React from "react";
import { NoSSR } from "@components";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import RoadMapDesktop from "@assets/roadmap-desktop.svg";
import RoadMapMobile from "@assets/mobile-roadmap.svg";

const RoadMap = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop, windowSize } = useGetScreenSizeHook();
  const screenWidth = windowSize.width;
  return (
    <div className={classes.root}>
      <NoSSR>
        {isDesktop ? (
          <>
            <h5>{t("roadMap")}</h5>
            <RoadMapDesktop
              className="roadMap"
              width={isDesktop ? 986 : screenWidth - 40}
              height={2553}
            />
          </>
        ) : (
          <>
            <h3>{t("roadMapCap")}</h3>
            <RoadMapMobile
              className="roadMap"
              width={screenWidth - 40}
              height="100%"
            />
          </>
        )}
      </NoSSR>
    </div>
  );
};

export default RoadMap;
