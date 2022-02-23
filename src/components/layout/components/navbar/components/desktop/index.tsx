import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useStyles } from "./styles";
import DesmosLogo from "@assets/desmos.svg";
import { getMenuItems, getGrantItems } from "../menu_items/utils";
import { MenuItems } from "../";

const Desktop: React.FC<{
  logoURL: string;
  className?: string;
  grants?: boolean;
}> = ({ className, logoURL, grants }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");
  const items = grants ? getGrantItems() : getMenuItems();
  return (
    <div className={className}>
      <div className={classes.root}>
        <Link href={logoURL}>
          <a className={classes.a}>
            <DesmosLogo className={classes.logo} />
          </a>
        </Link>
        <Box style={{ display: grants ? "flex" : "none" }}>
          <List>
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
