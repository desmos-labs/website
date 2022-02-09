import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import CloseIcon from "@assets/icon_cross.svg";
import CalendarIcon from "@assets/icon_calendar.svg";
import AirdropParachuteDSM from "@assets/airdrop-dsm.svg";
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
      padding="16px"
      flexDirection="column"
      alignItems="center"
      style={{
        background: "url('/images/airdrop_banner.svg')",
        backgroundColor: "rgba(255, 255, 255, 1)",
        backgroundSize: "cover",
        display: airdropDialogOpen ? "flex" : "none",
        borderRadius: theme.spacing(3),
        mixBlendMode: "normal",
        boxShadow: "-4px 8px 30px rgba(70, 53, 43, 0.1)",
      }}
    >
      <IconButton
        className={classes.closeButton}
        onClick={() => setAirdropDialogOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle style={{ padding: theme.spacing(2, 3, 0, 3) }}>
        <Typography className={classes.h1}>DSM Airdrop is claimable</Typography>
      </DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 239, 209, 0.4) -0.23%, rgba(255, 198, 157, 0.32) 100%)",
            borderRadius: theme.spacing(3),
            padding: theme.spacing(0.5, 1),
          }}
        >
          <CalendarIcon style={{ marginRight: "5px" }} />
          <Typography className={classes.h3}>
            25 Nov, 2021 - 25 Feb, 2022
          </Typography>
        </Box>
      </DialogContent>
      <DialogContent>
        <Button
          variant="contained"
          component="a"
          target="_blank"
          href={"https://airdrop.desmos.network/"}
          className={classes.button}
        >
          Check Eligibility
        </Button>
      </DialogContent>
      <Box
        position="absolute"
        left="0px"
        top="45px"
        display="flex"
        justifyContent="center"
      >
        <AirdropParachuteDSM width="64px" height="64px" />
      </Box>
      <Box
        position="absolute"
        right="0px"
        bottom="20px"
        display="flex"
        justifyContent="center"
      >
        <AirdropParachuteDSM
          width="64px"
          height="64px"
          style={{ transform: "scale(-1,1)" }}
        />
      </Box>
    </Box>
  );
};

export default AirdropBox;
