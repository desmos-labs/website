import { makeStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = makeStyles((theme: any) => ({
  root: {
  }, section: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1200px"
    }
  }}))