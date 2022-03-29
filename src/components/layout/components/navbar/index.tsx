import React from "react";
import dynamic from "next/dynamic";
import { useGetScreenSizeHook } from "@hooks";
import { Mobile } from "./components";
import { useStyles } from "./styles";
import { useNavHook } from "./hooks";

const Desktop = dynamic(() => import("./components/desktop"));

const Nav: React.FC<{
  title?: string;
  logoURL: string;
  grants?: boolean;
}> = ({ title, logoURL, grants }) => {
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const { displayBackground } = useNavHook();
  return (
    <>
      {isDesktop ? (
        <Desktop
          className={classes.desktop}
          displayBackground={displayBackground}
          logoURL={logoURL}
          grants={grants}
        />
      ) : (
        <Mobile
          className={classes.mobile}
          title={title}
          displayBackground={displayBackground}
          logoURL={logoURL}
          grants={grants}
        />
      )}
    </>
  );
};

export default Nav;
