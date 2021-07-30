import { makeStyles, createStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        "& .media": {
          margin: "0 0.5rem",
          "&:first-child": {
            marginLeft: 0,
          },
          "&:last-child": {
            marginRight: 0,
          },
          "& path": {
            transition: "all 0.3s ease",
            fill: "rgba(59, 60, 36, 1)",
          },
          "&:hover": {
            "& path": {
              fill: "rgba(153, 153, 153, 0.2)",
            },
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {},
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {},
      },
    });
  });
  return {
    classes: useStyles(),
  };
};
