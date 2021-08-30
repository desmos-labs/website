import { makeStyles, createStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        backgroundImage: "url('/images/background-desktop.png')",
        backgroundSize: "100%",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "& .nav__container": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            justifyContent: "flex-start",
          },
        },
        "& .nav__logo": {
          width: "180px",
        },
        "& .socials__container": {
          position: "fixed",
          zIndex: 1,
          bottom: theme.spacing(1),
          right: theme.spacing(1),
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            bottom: theme.spacing(3),
            right: theme.spacing(3),
          },
          "& .social-media": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            "& .media": {
              margin: "0!important" as string,
              padding: "0.3rem 0rem",
              "& path": {
                transition: "all 0.3s ease",
                fill: "rgba(250, 122, 66, 1)!important",
              },
            },
          },
        },
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {},
      [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {},
    });
  });
  return {
    classes: useStyles(),
  };
};
