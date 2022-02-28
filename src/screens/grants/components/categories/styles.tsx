import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: any) => ({
  container: {
    height: "100vh",
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "row",
    },
  },
  h1: {
    fontFamily: "Poppins Extra Bold",
    background:
      "linear-gradient(160.72deg, #FFFFFF -18.73%, #F84998 -4.7%, #FF6B00 17.53%, #FFB342 35.66%, #FBDA0F 52.03%, #FA9805 69.58%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingBottom: theme.spacing(4.5),
      fontSize: theme.spacing(6),
    },
  },
  grid: {
    display: "grid",
    // padding: theme.spacing(1.5, 1),
    gridGap: theme.spacing(5),
    gridTemplateColumns: "repeat(1, 1fr)",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
}));
