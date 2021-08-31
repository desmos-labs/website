import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";

export interface ICardProps {
  image?: any;
  mobileImage?: any;
  title: string;
  details: string;
}

const ProfileCard = (props: ICardProps) => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { image, title, details } = props;
  const Svg = image;
  return (
    <Card className={classes.root}>
      {/* <HeroSlogan className="hero__slogan" /> */}
      {/* <div style={{ height: 300, width: 350 }}> */}
      <Svg className="svg" width="100%" />
      {/* </div> */}
      {/* <div className="card__content"> */}
      <h3 style={{ padding: "0px 32px" }}>{title}</h3>
      <p style={{ padding: "32px" }}>{details}</p>
      {/* </div> */}
    </Card>
  );
};

export default ProfileCard;
