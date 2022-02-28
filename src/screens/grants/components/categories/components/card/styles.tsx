import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: any) => ({
  card: {
    borderRadius: "36px",
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0px 30px 30px rgba(65, 55, 129, 0.13)",
    padding: theme.spacing(4, 4.2),
  },
  h3: {
    fontFamily: "Poppins Extra Bold",
    paddingTop: theme.spacing(0.5),
    fontSize: theme.spacing(2.25),
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(1.5),
      fontSize: theme.spacing(3),
    },
  },
  p: {
    paddingTop: theme.spacing(0.5),
    fontSize: theme.spacing(1.75),
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(1.5),
      fontSize: theme.spacing(2),
    },
  },
}));
