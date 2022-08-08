import { forwardRef } from "react";
import slugify from "slugify";
import styled from "styled-components";
import tw from "twin.macro";

import { NextLink } from "../../atoms";

// @types
import { INavLink } from "../Nav/Nav";

export interface DrawerProps {
  links: INavLink[];
  isOpen: boolean;
  onClose: () => void;
}

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  ${tw`fixed top-0 left-0 bottom-0 h-full bg-black text-white border-solid border-0 border-r border-white transition-all duration-500`}
  width: 250px;
  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.4);
  z-index: 8000;

  ${({ isOpen }) =>
    !isOpen &&
    `
    left: -100%;
  `}
`;

const DrawerContent = styled.div`
  ${tw`box-border h-full w-full overflow-auto`}
`;

const DrawerNav = styled.nav`
  ${tw`px-10 py-4`}
`;

const NavItem = styled.div`
  a {
    ${tw`text-white no-underline hover:text-blue-500 py-2 block`}
  }
`;

const DrawerHeader = styled.div`
  ${tw`p-2 text-center font-light uppercase text-blue-500 text-xl bg-white`}
`;

const DrawerOverlay = styled.div<{ isOpen?: boolean }>`
  ${tw`fixed top-0 left-0 h-full w-full`}
  z-index: 5000;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const CloseButton = styled.button`
  ${tw`outline-none border-0 text-blue-500 w-full bg-transparent cursor-pointer`}
`;

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { links, isOpen, onClose } = props;

  return (
    <>
      <DrawerOverlay isOpen={isOpen} />
      <DrawerContainer className="drawer" ref={ref} isOpen={isOpen}>
        <DrawerContent>
          <DrawerHeader>
            <CloseButton onClick={() => onClose()}>X</CloseButton>
          </DrawerHeader>
          <DrawerNav>
            {links.map((link) => (
              <NavItem key={slugify(link.url as string)}>
                <NextLink href={link.url}>{link.text}</NextLink>
              </NavItem>
            ))}
          </DrawerNav>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
});

Drawer.defaultProps = {};

export default Drawer;
