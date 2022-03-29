import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useGetComponentDimension } from "@hooks";
import { useRouter } from "next/router";
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import DesmosLogo from "@assets/desmos.svg";
import { getMenuItems, getGrantItems } from "../menu_items/utils";
import { MenuItems } from "../";

const Desktop: React.FC<{
  logoURL: string;
  displayBackground: boolean;
  className?: string;
  grants?: boolean;
}> = ({ className, displayBackground, logoURL, grants }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");
  const { ref: heightRef, height } = useGetComponentDimension();
  const items = grants ? getGrantItems() : getMenuItems();
  return (
    <div
      className={className}
      style={{ background: displayBackground ? "white" : "transparent" }}
    >
      <div className={classes.root}>
        <Link href={logoURL}>
          <a className={classes.a}>
            <DesmosLogo className={classes.logo} />
          </a>
        </Link>
        <Box>
          <List className={classes.items}>
            {items.map((x) => {
              let isActive = false;
              if (x.url === router?.asPath) {
                isActive = true;
              }
              if (router?.asPath?.includes(x.url) && x.url !== "/") {
                isActive = true;
              }

              return (
                <Link href={x.url} key={x.key} passHref>
                  <ListItem
                    className={classnames({
                      active: isActive,
                    })}
                    component="a"
                    // onClick={toggleNavMenus}
                  >
                    <ListItemText primary={t(x.key)} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
      </div>
    </div>
  );
};

export default Desktop;
