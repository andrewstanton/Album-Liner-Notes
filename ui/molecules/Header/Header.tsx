import styled from "styled-components";
import tw from "twin.macro";

import colors from "../../../config/colors";

import { Wrapper, Logo, NextLink, Hamburger } from "../../atoms";
import Nav, { INavLink } from "../Nav/Nav";

const HeaderContainer = styled.header<{ color?: string }>`
  ${tw`bg-black text-white w-full border-0 border-solid border-t-2`}

  ${({ color }) => color && `border-color: ${color};`}
`;

export interface HeaderProps {
  color?: string;
  links: INavLink[];
  isOpen?: boolean;
  onHamburgerClick?: () => void;
}

const HeaderTop = styled.div`
  ${tw`p-4 border-solid border-0 border-b border-white `}

  .hamburger {
    ${tw`inline-block md:hidden`}
  }
`;

const HeaderBottom = styled.div`
  ${tw`md:block hidden`}
`;

const LogoContainer = styled.div<{ color?: string }>`
  ${tw`inline-block ml-4`}

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
  const { color, links, isOpen, onHamburgerClick } = props;

  return (
    <HeaderContainer color={color}>
      <HeaderTop>
        <Wrapper>
          <Hamburger on={isOpen} onClick={onHamburgerClick} />
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
