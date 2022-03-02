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
            marginBottom: theme.spacing(3)
          },
        },
        stepBodyWrapper: {
          [theme.breakpoints.up("sm")]: {
            maxWidth: '70%',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          [theme.breakpoints.up("md")]: {
            maxWidth: '650px',
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: '800px',
          },
        },
        stepWrapper: {
          background: 'rgba(255, 255, 255, 0.6)',
          boxShadow: "0px 30px 30px rgba(65, 55, 129, 0.13)",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: theme.spacing(4, 2),
          margin: theme.spacing(6, 0),
          borderRadius: theme.spacing(2),
          '&:first-child': {
            marginTop: 0,
          },
          '&:last-child': {
            marginBottom: 0,
          },
          [theme.breakpoints.up("md")]: {
            margin: theme.spacing(8, 0),
            padding: theme.spacing(6, 2),
          },
          [theme.breakpoints.up("lg")]: {
            margin: theme.spacing(13, 0),
            borderRadius: theme.spacing(4),
            padding: theme.spacing(8, 2),
          },
        },
        stepTitle: {
          textAlign: 'center',
          color: '#3B3C24',
          fontFamily: "Poppins Extra Bold",
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up("lg")]: {
            marginBottom: theme.spacing(1),
            textAlign: 'left',
            '&.step': {
              display: 'none'
            }
          }
        },
        stepDetails: {
          marginBottom: theme.spacing(2),
          textAlign: 'center',
          '& a.application-link': {
            fontFamily: "Poppins Extra Bold",
            color: 'rgba(250, 122, 66, 1)',
            textDecoration: 'none'
          },
          [theme.breakpoints.up("lg")]: {
            textAlign: 'left',
            marginBottom: 0,
          }
        },
        stepImage: {

        },
        stepFlex: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.up("lg")]: {
            width: '100%',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            alignItems: 'center',
            '& img': {
              width: '75px',
              marginRight: theme.spacing(4),
              marginLeft:theme.spacing(8),
              '&.application': {
                width: '60px',
              }
            },
            "& .text-wrapper": {
              flex: 1,
              marginRight:theme.spacing(8),
            }
          }
        }
      });
    },
  )();

  return styles;
};
