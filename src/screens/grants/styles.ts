import { makeStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = makeStyles((theme: any) => ({
  root: {
  }, section: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
    }
  }}))