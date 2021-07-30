import React from "react";
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";

// Separated to use our useSettingsContext hook
function InnerApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default InnerApp;
