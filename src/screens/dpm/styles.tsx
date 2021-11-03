import { makeStyles, createStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        // height: "100vh",
        // width: "100%",
        "& .dpm-page__container": {
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          [theme.breakpoints.up("lg")]: {
            maxWidth: theme?.breakpoints?.values?.maxWidth,
          },
        },
        "& .dpm-page__left-container": {
          "& h1": {
            fontSize: "40px",
            fontWeight: 900,
            paddingBottom: theme.spacing(3),
            background:
              "conic-gradient(from 177.63deg at 33.98% 18.71%, #FFB800 -41.25deg, #FFA800 37.5deg, #FF3E9A 157.5deg, #F45511 190.96deg, #FFB800 318.75deg, #FFA800 397.5deg)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        },
        "& .dpm-downloads": {
          "& img": {
            [theme.breakpoints.up("lg")]: {
              width: "200px",
              margin: theme.spacing(3, 3, 1, 0),
            },
          },
        },
        "& img": {
          [theme.breakpoints.up("lg")]: {
            width: "400px",
          },
        },
      },
    });
  });
  return {
    classes: useStyles(),
  };
};
