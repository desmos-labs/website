import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& .image-container": {
          width: "280px",
          [theme.breakpoints.up("lg")]: {
            width: "430px",
          },
          "& div": {
            position: "unset !important",
          },
          "& .image": {
            objectFit: "contain",
            width: "100% !important",
            position: "relative !important",
            height: "70px !important",
            [theme.breakpoints.up("lg")]: {
              height: "95px !important",
            },
          },
        },
        "& .team-image-container": {
          width: "100%",
          [theme.breakpoints.up("lg")]: {
            float: "right",
            width: "80%",
          },
          "& div": {
            position: "unset !important",
          },
          "& .teamImage": {
            objectFit: "contain",
            width: "100% !important",
            position: "relative !important",
            height: "100% !important",
            [theme.breakpoints.up("lg")]: {
              height: "100% !important",
            },
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
        "& a": {
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
        " & p, & .hero__content": {
          color: "rgba(59, 60, 36, 1)",
          fontSize: theme.spacing(2.5),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "left",
          padding: theme.spacing(2, 0, 2),
          "& h4": {
            color: theme.palette.custom.general.icon,
          },
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
          // "& .hero__slogan": {
          //   width: "550px",
          // },
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
