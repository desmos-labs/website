import React from "react";
// import { useTranslation } from "i18n";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { ProductCard } from "./components";
import { useStyles } from "./styles";
import { productItems } from "./ultils";

const Ecosystem = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
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
