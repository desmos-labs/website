import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: any) => ({
  grid: {
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    width: '100%',
    [theme.breakpoints.up("md")]: {
      margin: '0 auto',
      width: '70%',
    }
  },
  grid1: {
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
  },
  grid2: {
    gridRow: "1 / span 1",
    gridColumn: "2 / span 1",
  },
  grid3: {
    gridRow: "2 / span 1",
    gridColumn: "1 / span 2",
  },
  card: {
    width: '100%',
    height: theme.spacing(8),
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow: "0px 51.6667px 51.6667px rgba(69, 42, 124, 0.08)",
    borderRadius: theme.spacing(2),
    "&:hover": {
      background: "rgba(255, 255, 255, 1)",
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(14),
    },
  },
  button: {
    fontSize: theme.spacing(2),
    fontWeight: 500,
    color: "#FA7A42",
    padding: theme.spacing(1.5, 5),
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow: "0px 51.6667px 51.6667px rgba(69, 42, 124, 0.08)",
    borderRadius: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      background: "rgba(255, 255, 255, 1)",
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(1.5, 5),
    },
  },
}));
