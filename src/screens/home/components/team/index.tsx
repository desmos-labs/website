import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { NoSSR } from "@components";
import { useStyles } from "./styles";
import TeamImage from "@assets/team-image.svg";
import ArrowIcon from "@assets/icon-arrow.svg";

const Team = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { windowSize, isDesktop } = useGetScreenSizeHook();
  const screenWidth = windowSize.width;
  return (
    <div className={classes.root}>
      <div className="left__content">
        <div className="image-container">
          <Image
            src="/images/our-team.png"
            alt="Team Slogan"
            className="image"
            layout="fill"
          />
        </div>

        <div className="hero__content">
          <p>{t("teamP")}</p>
        </div>

        <div className="hero__content">
          <a
            href="https://www.forbole.com/about"
            target="_blank"
            rel="noreferrer"
          >
            <h4>{t("browseTeam")}</h4>
            <ArrowIcon className="arrow__icon" />
          </a>
        </div>
      </div>
      <NoSSR>
        <TeamImage
          style={{ float: "right" }}
          width={isDesktop ? 875 : screenWidth - 30}
        />
      </NoSSR>
    </div>
  );
};

export default Team;
