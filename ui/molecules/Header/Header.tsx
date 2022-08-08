import styled from "styled-components";
import tw from "twin.macro";

import colors from "../../../config/colors";

import { Wrapper, Logo, NextLink } from "../../atoms";
import Nav, { ILink } from "../Nav/Nav";

const HeaderContainer = styled.header<{ color?: string }>`
  ${tw`bg-black text-white w-full border-0 border-solid border-t-2`}

  ${({ color }) => color && `border-color: ${color};`}
`;

export interface HeaderProps {
  color?: string;
  links: ILink[];
}

const HeaderTop = styled.div`
  ${tw`p-4`}
`;

const HeaderBottom = styled.div`
  ${tw`border-solid border-0 border-t border-white`}
`;

const LogoContainer = styled.div<{ color?: string }>`
  .logo {
    ${tw`transition-all duration-300`}

    &:hover {
      transform: scale(1.05);
      .liner {
        ${({ color }) => color && `color: ${color};`}
      }
    }
  }

  .liner {
    ${tw`transition-all duration-500`}
  }
`;

/**
 * Header Component
 * @const {React.FC} Header
 */
const Header: React.FC<HeaderProps> = (props) => {
  const { color, links } = props;

  return (
    <HeaderContainer color={color}>
      <HeaderTop>
        <Wrapper>
          <LogoContainer color={color}>
            <NextLink href="/" title="Album Liner Notes Home">
              <Logo />
            </NextLink>
          </LogoContainer>
        </Wrapper>
      </HeaderTop>
      <HeaderBottom>
        <Wrapper>
          <Nav links={links} />
        </Wrapper>
      </HeaderBottom>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  color: colors.blue500,
  links: [],
};

export default Header;
