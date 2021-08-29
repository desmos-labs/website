import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& .svgSlide": {
          padding: "0 4rem",
        },
      },
    };
  })();
  return styles;
};
