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
}> = ({ className, title }) => {
  // const { isOpen, toggle } = useMobileNavHook();
  const { ref: heightRef, height } = useGetComponentDimension();
  const { isMenu, isOpen, toggleNavMenus } = useMobileNavHook();
  const classes = useStyles();
  // const { color, displayBackground } = props;
  // const { classes } = useGetStyles({ isOpen, color, displayBackground });
  return (
    <div className={className}>
      <div ref={heightRef} className={classes.root}>
        <Menu
          toggleNavMenus={toggleNavMenus}
          className={classnames(classes.screens, {
            open: isMenu,
            menu: isMenu,
          })}
        />
        <Navbar
          isOpen={isOpen}
          // openItem={openItem}
          toggleNavMenus={toggleNavMenus}
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
