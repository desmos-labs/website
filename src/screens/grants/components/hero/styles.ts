import { makeStyles } from "@material-ui/styles";
import { getMinMediaQuery } from "@styles";

interface StyleProps {
  grants: boolean;
}

export const useStyles = makeStyles((theme: any) => ({
  root: {},
  h1: {
    fontFamily: "Poppins Extra Bold", 
    // filter: "blur(30px)",
      background: "linear-gradient(160.72deg, #FFFFFF -18.73%, #F84998 -4.7%, #FF6B00 17.53%, #FFB342 35.66%, #FBDA0F 52.03%, #FA9805 69.58%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  }
}))