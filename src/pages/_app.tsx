import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import AppProvider from "@/contexts";
import GlobalStyle from "@/styles/globals";
import { theme } from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
