import React from "react";
import Link from "next/link";
import { Box, Typography, ListItem, ListItemText } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import FooterLogo from "@assets/desmos.svg";
import { SocialMedia } from "@components";
import { footerLinks, footer } from "./utils";
import { useGetStyles } from "./styles";

const Footer: React.FC<{
  baseURL: string;
}> = ({ baseURL }) => {
  const { t } = useTranslation("common");
  const { classes } = useGetStyles();
  const footerItems = Object.entries(footer).map(([title, details]) => ({
    title,
    details,
  }));

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={`${classes.root} footer`}>
      <div className="footer__content">
        {/* ============================= */}
        {/* top container: logo & socials */}
        {/* ============================= */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div className="footer__logo--container">
            <FooterLogo className="footer__logo" />
            {/* <p className="footer__slogan">{t("common:slogan")}</p> */}
          </div>
          <SocialMedia />
        </Box>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        {/* <div className="footer__desktop">
          <div className="footer__links">
            {footerLinks.map((link) => {
              return (
                <div key={link.key} className={`${link.key} links__group`}>
                  <Link
                    key={link.url}
                    href={link.externalURL ? link.url : baseURL + link.url}
                  >
                    <a>{t(`${link.key}`)}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div> */}
        <Box className={classes.footer}>
          {footerItems.map((item, i) => {
            const { title, details } = item;
            console.log(details);
            return (
              <Box key={i} display="flex" flexDirection="column">
                <Box fontWeight="fontWeightBold" pb={1}>
                  {t(title)}
                </Box>
                {details.map((detail, x) => {
                  const { key, url } = detail;
                  return (
                    // <Box key={x}>
                    //   <Link
                    //     key={url}
                    //     href={detail.externalURL ? detail.url : baseURL + url}
                    //   >
                    //     <a>{t(`${key}`)}</a>
                    //   </Link>
                    // </Box>
                    <Link href={url} key={x} passHref>
                      <ListItem component="a" className={classes.listItem}>
                        {detail.icon && (
                          <Box
                            component="span"
                            pr={1}
                            display="flex"
                            alignContent="center"
                          >
                            {detail.icon}
                          </Box>
                        )}
                        <ListItemText primary={t(key)} />
                      </ListItem>
                    </Link>
                  );
                })}
              </Box>
            );
          })}
        </Box>
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
