import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        "& h3": {
          fontSize: "40px",
          fontWeight: 900,
          paddingBottom: theme.spacing(3),
          background:
            "conic-gradient(from 177.63deg at 33.98% 18.71%, #FFB800 -41.25deg, #FFA800 37.5deg, #FF3E9A 157.5deg, #F45511 190.96deg, #FFB800 318.75deg, #FFA800 397.5deg)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      },
    };
  })();
  return styles;
};
