import React from "react";
import Image from "next/image";
import { useGetScreenSizeHook } from "@hooks";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import LeftDotIcon from "@assets/intro-left-dot.svg";
import RightDotIcon from "@assets/intro-right-dot.svg";

const Intro = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      {/* <IntroSlogan className="intro__slogan" /> */}
      {/* <img src=/> */}
      {isDesktop ? (
        // <IntroDesktop className="dp" />
        <div className="image-container">
          <Image
            src="/images/intro-slogan-desktop.png"
            alt="Intro Slogan"
            className="image"
            layout="fill"
          />
        </div>
      ) : (
        <div className="image-container">
          <Image
            src="/images/intro-slogan.png"
            alt="Intro Slogan"
            className="image"
            layout="fill"
          />
        </div>
      )}
      <div className="intro__content">
        <div className="intro__left__content">
          <LeftDotIcon className="dot__icon" />
          <h3>{t("privacyIssue")}</h3>
          <p>{t("leftIntro")}</p>
        </div>
        <div className="intro__right__content">
          <RightDotIcon className="dot__icon" />
          <h3>{t("censorship")}</h3>
          <p>{t("rightIntro")}</p>
          {/* <ArrowIcon className="arrow__icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
