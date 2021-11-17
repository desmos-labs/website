import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import FooterLogo from "@assets/desmos.svg";
import { SocialMedia } from "@components";
import { footerLinks } from "./utils";
import { useGetStyles } from "./styles";

const Footer: React.FC<{
  baseURL: string;
}> = ({ baseURL }) => {
  const { t } = useTranslation("common");
  const { classes } = useGetStyles();

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={`${classes.root} footer`}>
      <div className="footer__content">
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <div className="footer__logo--container">
          <FooterLogo className="footer__logo" />
          {/* <p className="footer__slogan">{t("common:slogan")}</p> */}
        </div>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        <div className="footer__desktop">
          <div className="footer__links">
            {footerLinks.map((link) => {
              return (
                <div key={link.key} className={`${link.key} links__group`}>
                  <Link key={link.url} href={baseURL + link.url}>
                    <a>{t(`${link.key}`)}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* ============================= */}
        {/* social */}
        {/* ============================= */}
        <div className="footer__social">
          {/* <h3>{t("community")}</h3> */}
          <SocialMedia />
          {/* ============================= */}
          {/* copyright */}
          {/* ============================= */}
          <div className="footer__copyright">
            <p>
              {t("copyright")} {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
