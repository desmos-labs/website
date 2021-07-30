import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& .intro__slogan": {
          width: "280px",
        },
        "& a": {
          textDecoration: "none",
        },
        "& .intro__content": {
          // display: "flex",
          // flexDirection: "row",
          // alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridGap: theme.spacing(5),
          padding: theme.spacing(1.5, 1),
          // "& svg": {
          //   margin: "0 0.1rem",
          //   width: "14px",
          //   height: "14px",
          //   [theme.breakpoints.up("lg")]: { width: "20px", height: "20px" },
          // },
          "& h3": {
            // color: theme.palette.custom.general.icon,
            fontWeight: "700",
            color: "rgba(59, 60, 36, 1)",
            fontSize: theme.spacing(3),
            [theme.breakpoints.up("lg")]: {
              fontSize: theme.spacing(4),
              paddingBottom: theme.spacing(2),
            },
          },
        },
        " & p": {
          color: "rgba(59, 60, 36, 1)",
          fontSize: theme.spacing(2.5),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "left",
          // padding: theme.spacing(1.5, 1),
        },
        "& .image-container": {
          width: "280px",
          [theme.breakpoints.up("lg")]: {
            width: "650px",
          },
          "& div": {
            position: "unset !important",
          },
          "& .image": {
            objectFit: "contain",
            // borderadius: 0.1rem;
            width: "100% !important",
            position: "relative !important",
            height: "85px !important",
          },
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
          " & .intro__content": {
            fontSize: theme.spacing(3),
            fontWeight: 300,
            letterSpacing: "0em",
            textAlign: "left",
            gridTemplateColumns: "repeat(2, 1fr)",
            padding: theme.spacing(10, 1),
            alignItems: "start",
            width: "100%",
          },
        },
      },
    };
  })();
  return styles;
};
