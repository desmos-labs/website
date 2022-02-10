import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme: any) => ({
    menuItem: {
      padding: theme.spacing(1, 3),
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
    },
    dialogButton: {
      flex: 1,
      margin: theme.spacing(4, 2),
      color: 'white',
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(0),
      right: theme.spacing(0),
    },
    h1: {
      fontFamily: "Poppins Extra Bold",
      background:
      "conic-gradient(from -0.17deg at 47.89% 40.11%, #FF3E9A -45deg, #FF9E75 40.76deg, #FF4E02 125.63deg, #FFB800 181.87deg, #FF3E9A 315deg, #FF9E75 400.76deg)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    h3: {
      fontWeight: 500,
      fontSize: theme.spacing(1.5),
      background:
      "conic-gradient(from -0.17deg at 47.89% 40.11%, #FF3E9A -45deg, #FF9E75 40.76deg, #FF4E02 125.63deg, #FFB800 181.87deg, #FF3E9A 315deg, #FF9E75 400.76deg)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    button: {
      backgroundColor: "rgba(237, 108, 83, 1)",
      borderRadius: theme.spacing(0.5),
      color: "rgba(255, 255, 255, 1)",
      '&:hover': {
        background: "rgba(255, 78, 2, 1)",
     },
    }
  }),
  {
    name: 'HookGlobalStyles',
    index: 2,
  }
)

export default useStyles
