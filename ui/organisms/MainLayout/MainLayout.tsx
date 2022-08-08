import { ReactChild, ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";

// molecules
import { Footer } from "../../molecules";

// organisms
import MainHeader from "../MainHeader/MainHeader";

// @types
import { INavLink } from "../../molecules/Nav/Nav";

export interface MainLayoutProps {
  title?: string;
  description?: string;
  headerNav: INavLink[];
  footerNav: INavLink[];
  children?: ReactNode | ReactChild;
}

const BodyContainer = styled.div`
  ${tw`bg-white`}
  min-height: 400px;
`;

const LayoutContainer = styled.div`
  font-family: "Oxygen", sans-serif;
`;

/**
 *
 * @const {React.FC<MainLayoutProps>} MainLayout
 *
 */
const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { title, description, headerNav, footerNav, children } = props;

  return (
    <LayoutContainer>
      <Head>
        <title>{title ?? "Album Liner Notes"} | Album Liner Notes</title>
        <meta name="description" content={description ?? "Album Liner Notes"} />
      </Head>
      <MainHeader links={headerNav} />
      <BodyContainer>{children}</BodyContainer>
      <Footer links={footerNav} />
    </LayoutContainer>
  );
};

MainLayout.defaultProps = {
  headerNav: [],
  footerNav: [],
};

export default MainLayout;
