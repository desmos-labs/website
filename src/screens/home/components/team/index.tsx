import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import TeamSlogan from "@assets/team.svg";
import ArrowIcon from "@assets/icon-arrow.svg";

const Team = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
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
        <a
          href="https://www.forbole.com/about"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hero__content">
            <h4>{t("browseTeam")}</h4>
            <ArrowIcon className="arrow__icon" />
          </div>
        </a>
      </div>
      <div className="team-image-container">
        <Image
          src="/images/team-image.png"
          alt="Team Image"
          className="teamImage"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Team;
