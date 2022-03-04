import { DefaultTheme } from "styled-components";

import colors from "./colors";
import breakpoints from "./media";

const shared = {
  colors,
  breakpoints,
};

const theme: DefaultTheme = {
  ...shared,
};

export default theme;
