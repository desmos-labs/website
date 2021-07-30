import React from "react";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";

export interface ICardProps {
  icon: any;
  title: string;
  details: string;
}

const InfoCard = (props: ICardProps) => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { icon, title, details } = props;
  const Svg = icon;
  return (
    <Card className={classes.root}>
      {/* <HeroSlogan className="hero__slogan" /> */}
      <Svg />
      {/* <div className="card__content"> */}
      <h3>{title}</h3>
      <p>{details}</p>
      {/* </div> */}
    </Card>
  );
};

export default InfoCard;
