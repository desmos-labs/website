import { makeStyles } from '@material-ui/core/styles'
import { getMinMediaQuery } from "@styles";

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
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  }),
  {
    name: 'HookGlobalStyles',
    index: 2,
  }
)

export default useStyles
