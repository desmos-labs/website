import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& .hero__slogan": {
          width: "300px",
        },
        "& a": {
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
        "& .hero__content": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& svg": {
            margin: "0 0.1rem",
            width: "14px",
            height: "14px",
            [theme.breakpoints.up("lg")]: { width: "20px", height: "20px" },
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
