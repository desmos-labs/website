import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { ExpandMore } from "@material-ui/icons";
import DesmosLogo from "@assets/desmos.svg";
import { NavbarProps } from "./types";
import { useStyles } from "./styles";
// import { NavbarProps } from "./types";

const Navbar = (props: NavbarProps) => {
  // const { isOpen, color, displayBackground } = props;
  const classes = useStyles();
  const { isOpen, toggleNavMenus } = props;

  return (
    <div
      className={classes.root}
      // isOpen={isOpen}
      // color={color}
      // displayBackground={displayBackground}
    >
      <Link href="/">
        <a className={classes.a}>
          <DesmosLogo className={classes.logo} />
        </a>
      </Link>
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={classnames(classes.hamburger, {
            active: isOpen,
          })}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
