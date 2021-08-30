import { makeStyles, createStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return createStyles({
      root: {
        fontSize: "1rem",
        "& .home-page__hero": {
          // height: "100vh",
          minHeight: "100vh",
          backgroundColor: "transparent",
          // backgroundImage: "url('/images/desmos-hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "250%",
          backgroundPosition: "right -10px",
          padding: theme.spacing(3, 3, 0),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            backgroundSize: "100%",
            backgroundPosition: "0% 0%",
          },
        },
        "& .home-page__intro": {
          minHeight: "100vh",
          backgroundColor: "transparent",
          // backgroundImage: "url('/images/intro-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "250%",
          backgroundPosition: "-70px -120px",
          padding: theme.spacing(3, 3, 0),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            backgroundSize: "100%",
            backgroundPosition: "0% 0%",
          },
        },
        "& .home-page__solution": {
          minHeight: "100vh",
          // height: "150vh",
          backgroundColor: "transparent",
          // backgroundImage: "url('/images/intro-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "250%",
          backgroundPosition: "-70px -120px",
          padding: theme.spacing(7, 3, 0),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
            backgroundSize: "100%",
            backgroundPosition: "0% 0%",
            padding: theme.spacing(15, 3, 0),
          },
        },
        "& .hero__title": {
          width: "100%",
          fontSize: "2rem",
          color: "white",
          fontWeight: 500,
          marginTop: "5.5rem",
          textAlign: "center",
        },
        "& .about__container, & .networks__container": {
          padding: "2rem 1rem",
        },
        "& .about__title, & .networks__title": {
          fontSize: "1.75rem",
          fontWeight: 500,
          margin: 0,
        },
        "& .about__content": {
          whiteSpace: "pre-line",
          lineHeight: 2,
          marginTop: "1rem",
        },
        "& .column": {
          maxWidth: "800px",
        },
        "& .fixedratio": {
          width: "100%",
          margin: 0,
          display: "block",
        },
        "& .networks__items-list": {
          marginTop: "1.5rem",
          display: "grid",
          gridGap: "1rem",
          gridTemplateRows: "auto",
        },
        "& .network__item--title": {
          fontSize: "1.125rem",
          fontWeight: 400,
          marginBottom: "0",
        },
        "& .network__item--links": {
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "-0.25rem",
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
          "& .networks__items-list": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        },
        [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {
          "& .nav__container": {
            padding: "1rem 1.5rem",
          },
          "& .home-page__hero": {
            backgroundSize: "100%",
          },
          "& .hero__title": {
            marginTop: "5rem",
            fontSize: "2.625rem",
          },
          "& .max-width__parent": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .max-width__content": {
            width: "100%",
            maxWidth: theme?.breakpoints?.values?.maxWidth,
          },
          "& .about__title, & .networks__title": {
            fontSize: "2rem",
          },
          "& .about__container, & .networks__container": {
            padding: "3.5rem 1rem",
          },
          "& .networks__items-list": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        },
      },
    });
  });
  return {
    classes: useStyles(),
  };
};
