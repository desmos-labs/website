import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { ProductCard } from "./components";
import { useStyles } from "./styles";
import { productItems } from "./ultils";
import { useGetScreenSizeHook } from "@hooks";
// import EcosystemSlogan from "@assets/ecosystem-slogan.svg";

const Ecosystem = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <div className={classes.root}>
      <h3>{t("ecosystem")}</h3>
      {isDesktop ? (
        <div className="image-container">
          <Image
            src="/images/ecosystem-slogan.png"
            alt="Feature Image"
            className="image"
            layout="fill"
          />
        </div>
      ) : (
        <div className="image-container">
          <Image
            src="/images/ecosystem-mobile.png"
            alt="Feature Image"
            className="image"
            layout="fill"
          />
        </div>
      )}
      {/* <EcosystemSlogan className="hi" /> */}
      <p className="productP">{t("productP")}</p>
      <div className="productGrid">
        {productItems.map((item, i) => (
          <ProductCard
            key={i}
            image={item.image}
            details={item.details}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
