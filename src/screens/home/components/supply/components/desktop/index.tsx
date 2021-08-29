import React from "react";
import classname from "classnames";
import { NoSSR } from "@components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { useStyles } from "./styles";
import ArrowIcon from "@assets/icon-arrow.svg";
import DSMChart from "@assets/supply-chart-desktop.svg";

const DesktopSupply: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { windowSize } = useGetScreenSizeHook();
  const screenWidth = windowSize.width;
  return (
    <div className={classname(className, classes.root)}>
      <div className="image-container">
        <Image
          src="/images/supply-slogan.png"
          alt="Supply Slogan"
          className="image"
          layout="fill"
        />
      </div>
      <a
        href="https://drive.google.com/file/d/1yFL3kp1BhAsgBn0SVHAuBsPbMcg4j1Zf/view"
        target="_blank"
        rel="noreferrer"
      >
        <div className="hero__content">
          <h4>{t("learnMore")}</h4>
          <ArrowIcon className="arrow__icon" />
        </div>
      </a>
      <div className="chart">
        <NoSSR>
          <DSMChart width={screenWidth - 500} />
        </NoSSR>
      </div>
    </div>
  );
};

export default DesktopSupply;
