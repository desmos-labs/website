import React from "react";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import RoadMapSVG from "@assets/road-map.svg";

const RoadMap = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop, windowSize } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      <RoadMapSVG
        className="roadMap"
        width={isDesktop ? 986 : windowSize.width - 40}
        height="100%"
      />
    </div>
  );
};

export default RoadMap;
