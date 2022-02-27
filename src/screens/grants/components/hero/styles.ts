import { makeStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

interface StyleProps {
  grants: boolean;
}

export const useStyles = makeStyles((theme: any) => ({
  root: {},
  h1: {
    fontFamily: "Poppins Extra Bold", 
    // filter: "blur(30px)",
    fontSize: theme.spacing(4),
    fontWeight: 800,
    // lineHeight: theme.spacing(6),
    background: "linear-gradient(160.72deg, #FFFFFF -18.73%, #F84998 -4.7%, #FF6B00 17.53%, #FFB342 35.66%, #FBDA0F 52.03%, #FA9805 69.58%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  p: {
    fontSize: theme.spacing(2),
    lineHeight: "24px",
    fontWeight: 300,
  },
  button: {
    backgroundColor: "rgba(237, 108, 83, 1)",
    borderRadius: theme.spacing(1.5),
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    color: "rgba(255, 255, 255, 1)",
    padding: theme.spacing(1, 5),
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.spacing(2.5),
    },
    "&:hover": {
      background: "rgba(255, 78, 2, 1)",
    },
  }
}))