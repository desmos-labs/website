import { makeStyles, createStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        // height: "100vh",
        // width: "100%",
        "& .dpm-page__container": {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          "& p": {
            padding: theme.spacing(2),
          },
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
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
          [theme.breakpoints.up("lg")]: {
            width: "200px",
            margin: theme.spacing(3, 3, 1, 0),
          },
        },
        "& .dpm-mobile": {
          "& img": {
            width: "200px",
            // height: "355px",
            height: "60px",
            margin: "8px",
          },
        },
        "& img": {
          // width: "250px",
          // // height: "355px",
          // height: "450px",
          [theme.breakpoints.up("lg")]: {
            // width: "300px",
            width: "200px",
            margin: theme.spacing(3, 3, 1, 0),
          },
        },
      },
    });
  });
  return {
    classes: useStyles(),
  };
};
