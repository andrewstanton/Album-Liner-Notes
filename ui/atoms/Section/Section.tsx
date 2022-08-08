import { ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Wrapper from "../Wrapper/Wrapper";

import media from "../../../config/media";

export interface ISectionStyles {
  minHeight?: number;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  wrapperMaxWidth?: number;
}

interface SectionStyleProps extends ISectionStyles {
  children?: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export type SectionProps = SectionStyleProps;

const SectionStyle = styled.section<SectionStyleProps>`
  ${tw`md:p-10 relative py-10 px-4`}

  ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : tw`bg-white`)}
  ${({ textColor }) => (textColor ? `color: ${textColor};` : tw`text-grey-500`)}

  ${({ padding }) =>
    padding &&
    `
    padding-top: ${padding};
    padding-bottom: ${padding};
  `}

  ${({ paddingTop }) =>
    paddingTop &&
    `
  padding-top: ${paddingTop};
  
  @media screen and (max-width: ${media.md}) {
    padding-top: 2.5rem;
  }
`}

${({ paddingBottom }) =>
    paddingBottom &&
    `
  padding-bottom: ${paddingBottom};
`}

  ${({ minHeight }) =>
    minHeight &&
    `
    min-height: ${minHeight}px;

    ${Wrapper} {
      min-height: ${minHeight}px;
    }
  `}
`;

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  const {
    children,
    bgColor,
    textColor,
    minHeight,
    padding,
    paddingBottom,
    paddingTop,
    wrapperMaxWidth,
  } = props;

  return (
    <SectionStyle
      minHeight={minHeight}
      bgColor={bgColor}
      textColor={textColor}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
    >
      <Wrapper maxWidth={wrapperMaxWidth}>{children}</Wrapper>
    </SectionStyle>
  );
};

Section.defaultProps = {
  wrapperMaxWidth: 1100,
};

export default Section;
