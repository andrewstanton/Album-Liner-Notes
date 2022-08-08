import { useState, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";

// hooks
import useOnClickOutside from "../../../hooks/useOnClickOutside";

import { Drawer, Header } from "../../molecules";

// @types
import { INavLink } from "../../molecules/Nav/Nav";

export interface MainHeaderProps {
  links: INavLink[];
}

const HeaderContainer = styled.div`
  .drawer {
    ${tw`block lg:hidden`}
  }
`;

const MainHeader: React.FC<MainHeaderProps> = (props: MainHeaderProps) => {
  const { links } = props;
  const [isOpen, setOpenState] = useState(false);
  const drawerRef = useRef(null);

  const toggleOpen = () => {
    setOpenState((o) => !o);
  };

  const handleOutsideClick = () => {
    if (isOpen) setOpenState(false);
  };

  useOnClickOutside(drawerRef, handleOutsideClick);

  return (
    <HeaderContainer>
      <Drawer
        ref={drawerRef}
        isOpen={isOpen}
        links={links}
        onClose={() => setOpenState(false)}
      />
      <Header isOpen={isOpen} links={links} onHamburgerClick={toggleOpen} />
    </HeaderContainer>
  );
};

MainHeader.defaultProps = {};

export default MainHeader;
