import React from "react";
import { NoSSR } from "@components";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import RoadMapSVG from "@assets/road-map.svg";

const RoadMap = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop, windowSize } = useGetScreenSizeHook();
  const screenWidth = windowSize.width;
  return (
    <div className={classes.root}>
      <NoSSR>
        <RoadMapSVG
          className="roadMap"
          width={isDesktop ? 986 : screenWidth - 40}
          height="100%"
        />
      </NoSSR>
    </div>
  );
};

export default RoadMap;
