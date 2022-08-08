import { ReactChild, ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface LogoProps {
  children?: string | ReactNode | ReactChild;
}

const LogoContainer = styled.div`
  ${tw`inline-block font-normal text-white text-3xl`}
  font-family: 'Oswald', sans-serif;
`;

const Logo: React.FC<LogoProps> = (props) => {
  const { children } = props;
  return <LogoContainer className="logo">{children}</LogoContainer>;
};

Logo.defaultProps = {
  children: (
    <>
      Album<span className="liner">Liner</span>Notes
    </>
  ),
};

export default Logo;
