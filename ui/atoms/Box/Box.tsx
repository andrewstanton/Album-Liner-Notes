import styled from "styled-components";
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  width,
  WidthProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  WidthProps &
  HeightProps &
  ColorProps &
  TextAlignProps &
  DisplayProps;

const Box = styled.div<BoxProps>`
  ${space} ${width} ${height} ${color} ${textAlign} ${display}
`;

Box.displayName = "Box";

export default Box;
