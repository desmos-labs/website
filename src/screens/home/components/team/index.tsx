import React from "react";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useStyles } from "./styles";
import TeamSlogan from "@assets/team.svg";
import ArrowIcon from "@assets/icon-arrow.svg";

const Team = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TeamSlogan className="hero__slogan" />
      <p>{t("hero")}</p>
      <div className="hero__content">
        <h4>{t("learnMore")}</h4>
        <ArrowIcon className="arrow__icon" />
      </div>
    </div>
  );
};

export default Team;
