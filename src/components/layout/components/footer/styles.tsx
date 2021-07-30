import { makeStyles, createStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        "&.footer": {
          background: "#FAFAFA",
          padding: "3rem 1.5rem 4rem",
          color: "black",
          height: "100%",
          zIndex: 101,
          position: "relative",
        },
        "& p": {
          marginTop: 0,
          marginBottom: "0.5rem",
        },
        "& .footer__logo": {
          width: "100%",
        },
        "& .footer__copyright": {
          borderTop: "solid 1px rgba(227, 227, 227, 1)",
          " & p": {
            color: "rgba(59, 60, 36, 1)",
            marginTop: "1rem",
            fontSize: "0.8rem",
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            " & p": {
              color: "rgba(59, 60, 36, 1)",
              margin: 0,
              fontSize: "0.8rem",
            },
          },
        },
        "& .footer__links": {
          marginTop: "1rem",
        },
        "& .footer__social": {
          "& .social-media": { marginBottom: "0.5rem" },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            "& .social-media": { marginBottom: "0rem" },
          },
        },
        "& .footer__logo--container": {
          width: "8.5rem",
        },
        "& .links__group": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          "& a": {
            margin: "0.5rem 0",
            color: "inherit",
            textDecoration: "none",
            paddingBottom: "1rem",
            transition: "0.2s",
            width: "100%",
            "&:hover": {
              color: "rgba(255,255,255, 0.3)",
            },
          },
          "&.forbole": {
            "& a:last-child": {
              paddingBottom: "0",
              borderBottom: "none",
            },
          },
          "&.media": {
            display: "none",
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            "& a": {
              margin: 0,
              borderBottom: "none",
              padding: 0,
              width: "auto",
            },
            "&.media": {
              display: "grid",
            },
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {},
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
          "&.footer": {
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
          },
          "& .footer__links": {
            height: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 0,
            padding: "2rem 0",
          },
          "& .footer__social": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          "& .links__group": {
            borderRight: "1px solid rgba(0, 0, 0, 0.5)",
            width: "10rem",
          },
          "& .footer__copyright": {
            borderTop: "none",
          },
        },
      },
    });
  });
  return {
    classes: useStyles(),
  };
};
