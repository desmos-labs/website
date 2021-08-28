import { makeStyles } from "@material-ui/core/styles";
// import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        // height: "max-content",
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
        "& .profileGrid": {
          //   display: "block",
          //   height: "70vh",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridGap: theme.spacing(5),
          padding: theme.spacing(1.5, 1),
          [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        },
        "& a": {
          textDecoration: "none",
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
        "& p": {
          padding: theme.spacing(3, 1, 3),
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "1200px",
          "& .hero__slogan": {
            width: "550px",
          },
          "& .hero__content": {
            padding: theme.spacing(2, 1, 3),
          },
          " & p, & .hero__content": {
            fontSize: theme.spacing(3),
            fontWeight: 300,
            letterSpacing: "0em",
            textAlign: "left",
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
