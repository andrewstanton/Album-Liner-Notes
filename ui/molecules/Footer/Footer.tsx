import slugify from "slugify";
import styled from "styled-components";
import tw from "twin.macro";

import { NextLink, Wrapper, Logo } from "../../atoms";

import { INavLink } from "../Nav/Nav";

export interface FooterProps {
  links: INavLink[];
}

const FooterWrapper = styled.footer`
  ${tw`text-white bg-grey-800 pt-10 pb-20`}
`;

const FooterGrid = styled.div`
  ${tw`md:grid`}
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 3rem;
`;

const LogoContainer = styled.div`
  .logo {
    ${tw`block text-2xl`}
  }
`;

const FooterHeader = styled.h4`
  ${tw`m-0 mb-2 font-normal text-2xl`}
  font-family: 'Oswald', sans-serif;
`;

const Tagline = styled.div`
  ${tw`text-sm`}
`;

const FooterLinks = styled.div`
  ${tw`mt-4`}

  a {
    ${tw`text-white no-underline hover:underline hover:text-white px-4 border-solid border-white border-0 border-r`}

    &:first-child {
      ${tw`pl-0`}
    }

    &:last-child {
      ${tw`border-r-0`}
    }
  }
`;

/**
 * Footer Component
 *
 * @const {React.FC} Footer
 */
const Footer: React.FC<FooterProps> = (props) => {
  const { links } = props;

  return (
    <FooterWrapper>
      <Wrapper>
        <FooterGrid>
          <LogoContainer>
            <Logo>AlbumLinerNotes.com</Logo>
            <Tagline>Explore All Music History</Tagline>
          </LogoContainer>
          <div>
            <FooterHeader>Explore Album Liner Notes</FooterHeader>
            <FooterLinks>
              {links.map((link) => (
                <NextLink key={slugify(link.url as string)} href={link.url}>
                  {link.text}
                </NextLink>
              ))}
            </FooterLinks>
          </div>
          <div>
            <FooterHeader>Follow Us</FooterHeader>
          </div>
        </FooterGrid>
      </Wrapper>
    </FooterWrapper>
  );
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
