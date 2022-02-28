import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: '40px 24px 0',
          [theme.breakpoints.up("lg")]: {
            padding: '72px 32px 24px',
          }
        },
        title: {
          fontFamily: "Poppins Extra Bold",
          background:
            "linear-gradient(160.72deg, #FFFFFF -18.73%, #F84998 -4.7%, #FF6B00 17.53%, #FFB342 35.66%, #FBDA0F 52.03%, #FA9805 69.58%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          fontSize: theme.spacing(4),
          paddingBottom: theme.spacing(3),
          textAlign: "center",
          [theme.breakpoints.up("lg")]: {
            paddingBottom: theme.spacing(4.5),
            fontSize: theme.spacing(6),
          },
        }
      });
    },
  )();

  return styles;
};
