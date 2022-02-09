import {
  Box,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import CloseIcon from "@assets/icon_cross.svg";
import useStyles from "./styles";

const AirdropBox = () => {
  const { t, lang } = useTranslation();
  const classes = useStyles();
  const [airdropDialogOpen, setAirdropDialogOpen] = React.useState(true);
  const theme = useTheme();

  return (
    <Box
      height="100%"
      width="100%"
      style={{
        background: "url('/images/airdrop-box-bg.svg')",
        backgroundColor: "rgba(255, 255, 255, 1)",
        display: airdropDialogOpen ? "block" : "none",
        borderRadius: theme.spacing(3),
      }}
    >
      <IconButton
        className={classes.closeButton}
        onClick={() => setAirdropDialogOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>{t("delete account")}</DialogTitle>
      <DialogContent>
        <Typography>{t("delete account warning")}</Typography>
      </DialogContent>
    </Box>
  );
};

export default AirdropBox;
