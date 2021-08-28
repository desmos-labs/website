import { makeStyles } from "@material-ui/core/styles";
// import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        boxShadow: "-4px 8px 30px rgba(70, 53, 43, 0)",
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2.5),
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        justifyContent: "space-between",
        " & p": {
          // padding: theme.spacing(1, 0, 0),
          color: "rgba(59, 60, 36, 1)",
          fontSize: theme.spacing(1.5),
          fontWeight: 300,
          letterSpacing: "0em",
          textAlign: "left",
          paddingBottom: theme.spacing(2),
          [theme.breakpoints.up("lg")]: {
            fontSize: theme.spacing(2.5),
            paddingBottom: theme.spacing(3),
          },
        },
        "& .discover__content": {
          color: "rgba(59, 60, 36, 1)",
          fontSize: theme.spacing(2.5),
          fontWeight: 700,
          // letterSpacing: "0em",
          // textAlign: "left",
          // padding: theme.spacing(1.5, 1),
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          "& h4": {
            color: theme.palette.custom.general.icon,
            fontSize: theme.spacing(1.5),
            [theme.breakpoints.up("lg")]: { fontSize: theme.spacing(2.5) },
          },
          "& svg": {
            margin: theme.spacing(0, 0.4),
            [theme.breakpoints.up("lg")]: { margin: theme.spacing(0, 2) },
          },
        },
        "& h3": {
          // color: theme.palette.custom.general.icon,
          fontWeight: "700",
          color: "rgba(59, 60, 36, 1)",
          padding: theme.spacing(3, 0, 0),
          fontSize: theme.spacing(3),
          [theme.breakpoints.up("lg")]: {
            fontSize: theme.spacing(3),
            paddingBottom: theme.spacing(2),
          },
        },
      },
    };
  })();
  return styles;
};
