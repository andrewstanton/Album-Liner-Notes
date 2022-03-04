import { ThemeProvider as StyledThemeProvider } from "styled-components";
import * as NextImage from "next/image";

import GlobalStyle from "../config/GlobalStyle";
import theme from "../config/theme";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withThemeProvider = (Story, context) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    <Story {...context} />
  </StyledThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
