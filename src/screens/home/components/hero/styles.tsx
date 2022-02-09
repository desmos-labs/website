import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& .hero__slogan": {
          width: "300px",
        },
        "& .a": {
          "& a": {
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
        },
        "& .button": {
          backgroundColor: "rgba(237, 108, 83, 1)",
          boxShadow:
            "box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
          color: "rgba(255, 255, 255, 1)",
          "&:hover": {
            background: "rgba(255, 78, 2, 1)",
          },
        },
        "& .hero__content": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& svg": {
            margin: "0 0.1rem",
            width: "14px",
            height: "14px",
            [theme.breakpoints.up("lg")]: {
              margin: "0 0.7rem",
              width: "20px",
              height: "20px",
            },
          },
        },
        " & p, & .hero__content": {
          color: "rgba(59, 60, 36, 1)",
          fontSize: theme.spacing(2.5),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "left",
          padding: theme.spacing(1.5, 1),
          "& h4": {
            color: theme.palette.custom.general.icon,
          },
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
          "& .hero__slogan": {
            width: "650px",
          },
          " & p, & .hero__content": {
            fontSize: theme.spacing(3),
            fontWeight: 300,
            letterSpacing: "0em",
            textAlign: "left",
            // padding: theme.spacing(1.5, 1),
            width: "100%",
            "& h4": {
              color: theme.palette.custom.general.icon,
              fontSize: theme.spacing(3),
            },
          },
        },
      },
    };
  })();
  return styles;
};
