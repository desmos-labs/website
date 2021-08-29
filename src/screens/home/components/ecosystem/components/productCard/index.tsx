import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import { useGetScreenSizeHook } from "@hooks";
import Card from "@material-ui/core/Card";
import StraightArrowIcon from "@assets/straight-arrow.svg";

export interface ICardProps {
  image: any;
  details: string;
  link: string;
}

const ProductCard = (props: ICardProps) => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { image, details, link } = props;
  const Svg = image;
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <Card className={classes.root}>
      {/* <HeroSlogan className="hero__slogan" /> */}
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Svg
            width={isDesktop ? 150 : 95}
            height={isDesktop ? 200 : 100}
            style={{ margin: "auto" }}
          />
        </div>
        {/* <div className="card__content"> */}
        <p>{details}</p>
        {/* </div> */}
      </div>
      <div className="discover__content">
        <a href={link} target="_blank" rel="noreferrer">
          <h4>{t("discover")}</h4>
        </a>
        <StraightArrowIcon
          className="straight_arrow__icon"
          width={isDesktop ? 20 : 12}
          height={isDesktop ? 20 : 12}
        />
      </div>
    </Card>
  );
};

export default ProductCard;
