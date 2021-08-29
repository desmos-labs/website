import { makeStyles } from "@material-ui/core/styles";
import { getMinMediaQuery } from "@styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& .svgSlide": {
          padding: "0 4rem",
        },
        "& .headerDiv": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "3rem",
        },
        "& .image-container": {
          width: "250px",
          "& div": {
            position: "unset !important",
          },
          "& .image": {
            objectFit: "contain",
            width: "100% !important",
            position: "relative !important",
            height: "70px !important",
          },
        },
      },
    };
  })();
  return styles;
};
