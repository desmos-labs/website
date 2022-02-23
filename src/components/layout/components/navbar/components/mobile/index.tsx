import React from "react";
import classnames from "classnames";
import { useGetComponentDimension } from "@hooks";
import { Menu, Navbar } from "./components";
import { useMobileNavHook } from "./hooks";
import { useStyles } from "./styles";
import { IMobileNav, IMobileNavBarIconCSS } from "./types";

const MobileNav: React.FC<{
  className?: string;
  title: string;
  logoURL: string;
  displayBackground: boolean;
  grants?: boolean;
}> = ({ className, title, displayBackground, logoURL, grants }) => {
  // const { isOpen, toggle } = useMobileNavHook();
  const { ref: heightRef, height } = useGetComponentDimension();
  const { isMenu, isOpen, toggleNavMenus } = useMobileNavHook();
  const classes = useStyles();
  return (
    <div className={className}>
      <div
        ref={heightRef}
        className={classes.root}
        style={{ background: displayBackground ? "white" : "transparent" }}
      >
        <Menu
          toggleNavMenus={toggleNavMenus}
          className={classnames(classes.screens, {
            open: isMenu,
            menu: isMenu,
          })}
          grants={grants}
        />
        <Navbar
          isOpen={isOpen}
          // openItem={openItem}
          toggleNavMenus={toggleNavMenus}
          logoURL={logoURL}
        />
        {/* <SearchBar className={classes.searchBar} /> */}
      </div>
      {/* ============================== */}
      {/* Height placeholder */}
      {/* ============================== */}
      <div style={{ height }} />
      {/* <TitleBar title={title} /> */}
    </div>
  );
};

export default MobileNav;
