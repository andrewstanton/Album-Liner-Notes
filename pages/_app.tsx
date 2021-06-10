import "@fontsource/roboto";
import type { AppProps } from "next/app";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
