import React from "react";
// import { useTranslation } from "i18n";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useGetScreenSizeHook } from "@hooks";
import { ProfileCard } from "./components";
import { useStyles } from "./styles";
import ArrowIcon from "@assets/icon-arrow.svg";
import { profileItems } from "./ultils";

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
      <div className="profileGrid">
        {profileItems.map((item, i) => (
          <ProfileCard
            key={i}
            image={item.image}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
