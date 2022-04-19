import React from "react";
// import { useTranslation } from "i18n";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { InfoCard } from "./components";
import { useStyles } from "./styles";
import ArrowIcon from "@assets/icon-arrow.svg";
import { solutionItems } from "./utils";

const Solution = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      {isDesktop ? (
        <div className="image-container">
          <Image
            src="/images/solution-desktop.png"
            alt="Solution"
            className="image"
            layout="fill"
          />
        </div>
      ) : (
        <div className="image-container">
          <Image
            src="/images/solution.png"
            alt="Solution"
            className="image"
            layout="fill"
          />
        </div>
      )}
      <p>{t("solutionP")}</p>

      <div className="hero__content">
        <a
          href="/files/desmos-project-plan-v0.4.2.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <h4>{t("learnMore")}</h4>
          <ArrowIcon className="arrow__icon" />{" "}
        </a>
      </div>

      <div className="solutionGrid">
        {solutionItems.map((item, i) => (
          <InfoCard
            key={i}
            icon={item.icon}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Solution;
