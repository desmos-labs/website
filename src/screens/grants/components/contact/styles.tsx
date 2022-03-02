import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: any) => ({
  container: {
    // height: "100vh",
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "100vh",
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
  p: {
    fontSize: theme.spacing(2),
    fontWeight: 400,
    lineHeight: "24px",
    paddingBottom: theme.spacing(2.5),
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.spacing(2.5),
      lineHeight: "30px",
      paddingBottom: theme.spacing(4),
      width: "70%",
      margin: "auto",
    },
  },
}));
