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
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto'
          },
          [theme.breakpoints.up("md")]: {
            maxWidth: '600px',
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
          },
          [theme.breakpoints.up("lg")]: {
            margin: theme.spacing(13, 0),
            borderRadius: '500px',
            // '&.even': {
            //   position: 'relative',
            //   left: '-125px'
            // },
            // '&.odd': {
            //   position: 'relative',
            //   left: '125px'
            // },
            // '&.step-wrapper-1:after': {
            //   position: 'absolute',
            //   top: '-4px',
            //   bottom: '-4px',
            //   left: '-4px',
            //   right: '-4px',
            //   background: 'linear-gradient(red, blue)',
            //   content: '" "',
            //   zIndex: -1,
            //   borderRadius: '500px'
            //   // borderWidth: '3px',
            //   // borderStyle: 'solid',
            //   // borderImage: "linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%"
            // },
            // '&.step-wrapper': {
            //   position: 'relative'
            // }
          },
        },
        stepTitle: {
          color: '#3B3C24',
          fontFamily: "Poppins Extra Bold",
          '&.step-1': {
            background: 'linear-gradient(137.42deg, #BD00FF -2.91%, rgba(66, 0, 255, 0.44) 107.27%)',
          },
          '&.step-2': {
            background: 'linear-gradient(137.42deg, #FF008A -2.91%, rgba(255, 0, 61, 0.44) 107.27%)',
          },
          '&.step-3': {
            background: 'linear-gradient(137.42deg, #FFB800 -2.91%, rgba(255, 107, 0, 0.85) 107.27%)',
          },
          '&.step-4': {
            background: 'linear-gradient(137.42deg, #FF8731 -2.91%, rgba(255, 122, 0, 0.71) 107.27%)',
          },
          '&.step': {
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            color: 'transparent',
            marginBottom: theme.spacing(2),
          },
        },
        stepDetails: {
          marginBottom: theme.spacing(2),
          textAlign: 'center',
        },
        stepImage: {

        }
      });
    },
  )();

  return styles;
};
