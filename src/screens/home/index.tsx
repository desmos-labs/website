import React from "react";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useGetStyles } from "./styles";
import LazyShow from "./hooks";
import {
  Hero,
  Intro,
  Solution,
  Profile,
  Supply,
  Team,
  RoadMap,
  Ecosystem,
} from "./components";

const Home = () => {
  const { t, lang } = useTranslation();
  // const { t } = useTranslation(["home", "common"]);
  const { classes } = useGetStyles();
  // const { networks } = useHomeHook();

  return (
    <Layout className={`${classes.root} home-page__container`}>
      {/* ============================= */}
      {/* hero */}
      {/* ============================= */}
      <div className="home-page__hero">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <Hero />
      </div>
      <div className="home-page__intro">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <Intro />
        </LazyShow>
      </div>

      <div className="home-page__solution" id="solution">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <Solution />
        </LazyShow>
      </div>

      <div className="home-page__solution" id="profile">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <Profile />
        </LazyShow>
      </div>
      <div className="home-page__solution" id="supply">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <Supply />
        </LazyShow>
      </div>
      <div className="home-page__solution" id="team">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <Team />
        </LazyShow>
      </div>
      <div className="home-page__solution" id="roadmap">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <RoadMap />
        </LazyShow>
      </div>
      <div className="home-page__solution" id="ecosystem">
        {/* <h1 className="hero__title">{t("title")}</h1>
         */}
        <LazyShow>
          <Ecosystem />
        </LazyShow>
      </div>

      {/* ============================= */}
      {/* about */}
      {/* ============================= */}
      {/* <div className="max-width__parent" id="about">
        <div className="about__container max-width__content">
          <h1 className="about__title">{t("aboutBigDipper")}</h1>
          <p className="about__content">{t("aboutContent")}</p>
          <p className="about__media">{t("socialMediaVisit")}</p>
          <SocialMedia className="home-page__media" />
        </div>
      </div> */}
      {/* ============================= */}
      {/* networks */}
      {/* ============================= */}
      {/* <div className="max-width__parent">
        <div className="networks__container max-width__content">
          <h2 className="networks__title">{t("supportedNetworks")}</h2>
          <div className="networks__items-list"> */}
      {/* {networks.map((x) => {
              return (
                <div className="network__item" key={x.name}>
                  <div className="column">
                    {/* <img
                      alt="random alt"
                      src={x.banner}
                      className="fixedratio"
                    /> */}
      {/* </div>
                  <h3 className="network__item--title">{x.name}</h3>
                  <div className="network__item--links">
                    {x.mainnet.map((network) => (
                      <NetworkLink
                        className="mainnet"
                        network={network}
                        key={network.chainId}
                      />
                    ))}
                    {x.testnet.map((network) => (
                      <NetworkLink
                        className="testnet"
                        network={network}
                        key={network.chainId}
                      />
                    ))}
                    {x.retired.map((network) => (
                      <NetworkLink
                        className="retired"
                        network={network}
                        key={network.chainId}
                      />
                    ))}
                    {x.other.map((network) => (
                      <NetworkLink
                        className="other"
                        network={network}
                        key={network.chainId}
                      />
                    ))}
                  </div>
                </div>
              );
            })} */}
      {/* </div>
        </div> */}
      {/* </div> */}
    </Layout>
  );
};

export default Home;
