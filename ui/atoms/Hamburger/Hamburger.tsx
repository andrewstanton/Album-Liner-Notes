import styled from "styled-components";
import tw from "twin.macro";

const IconContainer = styled.div<{ isOn?: boolean }>`
  ${tw`relative flex justify-center items-center cursor-pointer`}
  height: 25px;
  width: 25px;

  &::after,
  &::before {
    ${tw`transition-all`}
    content: " ";
  }

  &::before {
    top: 2px;
    left: 0;
  }

  &::after {
    bottom: 2px;
    left: 0;
  }

  span,
  &::after,
  &::before {
    ${tw`absolute bg-white`}
    height: 2px;
    width: 100%;
  }

  ${({ isOn }) =>
    isOn &&
    `
    span {
        display: none;
    }

    &::after {
        transform: translateY(-50%) rotate(45deg);
        top: 50%;
    }

    &::before {
        transform: translateY(-50%) rotate(-45deg);
        top: 50%;
    }
  `}

  span {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export interface HamburgerProps {
  on?: boolean;
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = (props: HamburgerProps) => {
  const { on, onClick } = props;
  return (
    <IconContainer
      onClick={() => onClick && onClick()}
      className="hamburger"
      isOn={!!on}
    >
      <span> </span>
    </IconContainer>
  );
};

Hamburger.defaultProps = {
  on: false,
};

export default Hamburger;
