import React from "react";
import { Box } from "@material-ui/core";
import { useGetScreenSizeHook } from "@hooks";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { ProfileCard } from "./components";
import { useStyles } from "./styles";
import profileItems from "./utils";
import ArrowIcon from "@assets/icon-arrow.svg";

const Profile = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      <div className="image-container">
        <Image
          src="/images/profile-slogan.png"
          alt="Feature Image"
          className="image"
          layout="fill"
        />
      </div>
      <p>{t("profileP")}</p>
      <Box className="link">
        <a
          href="https://dpm.desmos.network/"
          target="_blank"
          rel="noreferrer"
          // style={{ width: "fit-content" }}
        >
          <h4>{t("downloadNow")}</h4>
          <ArrowIcon className="arrow__icon" />
        </a>
      </Box>
      <div className="profileGrid">
        {profileItems.map((item, i) =>
          isDesktop ? (
            <ProfileCard
              key={i}
              image={item.image}
              title={item.title}
              details={item.details}
            />
          ) : (
            <ProfileCard
              key={i}
              image={item.mobileImage}
              title={item.title}
              details={item.details}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Profile;
