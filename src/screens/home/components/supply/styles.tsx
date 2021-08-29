import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {},
      mobile: {
        [theme.breakpoints.up("lg")]: {
          display: "none",
        },
      },
      desktop: {
        display: "none",
        [theme.breakpoints.up("lg")]: {
          display: "block",
        },
      },
    };
  })();
  return styles;
};
