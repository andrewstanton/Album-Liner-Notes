import styled from "styled-components";
import tw from "twin.macro";

import media from "../../../config/media";

export interface WrapperProps {
  width?: number;
  maxWidth?: number;
}

const Wrapper = styled.div<WrapperProps>`
  ${tw`mx-auto`}

  ${({ maxWidth }) =>
    maxWidth &&
    `
    max-width: ${maxWidth}px;
  `}

    ${({ width }) =>
    width &&
    `
      width: ${width}%;
    `}

    @media screen and (max-width: ${media.md}) {
    width: 100% !important;
  }
`;

Wrapper.defaultProps = {
  width: 90,
  maxWidth: 1400,
};

export default Wrapper;
