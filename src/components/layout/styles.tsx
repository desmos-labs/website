import { makeStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

interface StyleProps {
  grants: boolean;
}

export const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundImage: (props: StyleProps) =>
      props.grants
        ? "url('/images/background-grants-mobile.svg')"
        : "url('/images/background-mobile.png')",
    backgroundSize: "100%",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      backgroundImage: (props: StyleProps) =>
        props.grants
          ? "url('/images/background-grants-desktop.svg')"
          : "url('/images/background-desktop.png')",
      justifyContent: "flex-start",
    },
    "& .nav__container": {
      display: "flex",
      position: "fixed",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      zIndex: 500,
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        zIndex: 500,
        padding: 0,
      },
    },
    "& .nav__logo": {
      width: "180px",
    },
    "& .socials__container": {
      position: "fixed",
      zIndex: 500,
      bottom: theme.spacing(1),
      right: theme.spacing(1),
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        bottom: theme.spacing(3),
        right: theme.spacing(3),
      },
      "& .social-media": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        "& .media": {
          margin: "0!important" as string,
          padding: "0.3rem 0rem",
          "& path": {
            transition: "all 0.3s ease",
            fill: "rgba(250, 122, 66, 1)!important",
          },
        },
      },
    },
    "& .airdrop__container": {
      position: "fixed",
      zIndex: 1,
      bottom: theme.spacing(2),
      right: theme.spacing(5),
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
        bottom: theme.spacing(4),
        right: theme.spacing(7),
      },
    },
  },
  [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {},
  [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {},
}));

export default useStyles;
