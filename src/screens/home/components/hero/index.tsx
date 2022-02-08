import React from "react";
// import { useTranslation } from "i18n";
import { Box, Button } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useStyles } from "./styles";
import HeroSlogan from "@assets/hero-slogan.svg";
import ArrowIcon from "@assets/icon-arrow.svg";

const Hero = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroSlogan className="hero__slogan" />
      <p>{t("hero")}</p>
      <div className="hero__content">
        <Box className="a">
          <a
            href="/files/desmos-project-plan-v0.4.2.pdf"
            target="_blank"
            rel="noreferrer"
            // style={{ width: "fit-content" }}
          >
            <h4>{t("learnMore")}</h4>
            <ArrowIcon className="arrow__icon" />
          </a>
        </Box>
      </div>
      <Box pl="8px">
        <Button
          variant="contained"
          component="a"
          target="_blank"
          href={"https://x.forbole.com/"}
          className="button"
        >
          {t("stakeNowB")}
        </Button>
      </Box>
    </div>
  );
};

export default Hero;
