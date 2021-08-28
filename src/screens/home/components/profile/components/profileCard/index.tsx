import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";

export interface ICardProps {
  image: any;
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
      <Svg height={300} />
      {/* <div className="card__content"> */}
      <h3>{title}</h3>
      <p>{details}</p>
      {/* </div> */}
    </Card>
  );
};

export default ProfileCard;
