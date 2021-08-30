import React from "react";
import dynamic from "next/dynamic";
import { useGetScreenSizeHook } from "@hooks";
import { Mobile } from "./components";
import { useStyles } from "./styles";

const Desktop = dynamic(() => import("./components/desktop"));

const Nav: React.FC<{
  title?: string;
}> = ({ title }) => {
  const classes = useStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <>
      {isDesktop ? (
        <Desktop className={classes.desktop} />
      ) : (
        <Mobile className={classes.mobile} title={title} />
      )}
    </>
  );
};

export default Nav;
