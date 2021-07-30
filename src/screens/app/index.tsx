import React, { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { ApolloProvider } from "@apollo/client";
// import client from "@graphql";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { ToastContainer } from "react-toastify";
import { darkTheme, lightTheme } from "@styles";
import { GlobalContext } from "@src/contexts";
import appWithTranslation from "../../../i18n";
import { useGetStyles } from "./styles";
// import "react-toastify/dist/ReactToastify.css";

export const useLayoutHook = () => {
  const [isDarkMode, setMode] = useState<boolean | undefined>(false);

  const theme: any = isDarkMode ? darkTheme : lightTheme;

  return {
    isDarkMode,
    setMode,
    theme: createTheme(theme),
  };
};

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useLayoutHook();
  const { classes } = useGetStyles();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // =============================
  // global state
  // =============================
  const globalState = {};

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
      </Head>
      {/* <ApolloProvider client={client}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalContext.Provider value={globalState}>
          <Component {...pageProps} />
          {/* <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className={classes.toast}
            /> */}
        </GlobalContext.Provider>
      </ThemeProvider>
      {/* </ApolloProvider> */}
    </>
  );
}

export default MyApp;
