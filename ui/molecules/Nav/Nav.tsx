import styled from "styled-components";
import tw from "twin.macro";
import slugify from "slugify";
import { UrlObject } from "url";

import NextLink from "../../atoms/NextLink/NextLink";

export interface ILink {
  url: string | UrlObject;
  text: string;
  active?: boolean;
}

export interface NavProps {
  links: ILink[];
}

const NavContainer = styled.nav``;

const NavItem = styled.div<{ active?: boolean }>`
  ${tw`text-center inline-block`}

  a {
    ${tw`text-white no-underline inline-block px-6 py-4 text-lg hover:bg-blue-500 transition-all duration-150`}

    ${({ active }) =>
      active && tw`bg-white text-blue-500 cursor-default hover:bg-white`}
`;

const Nav: React.FC<NavProps> = (props) => {
  const { links } = props;

  return (
    <NavContainer>
      {links.map((link) => (
        <NavItem active={link.active} key={slugify(link.url as string)}>
          <NextLink href={link.url}>{link.text}</NextLink>
        </NavItem>
      ))}
    </NavContainer>
  );
};

Nav.defaultProps = {
  links: [],
};

export default Nav;
