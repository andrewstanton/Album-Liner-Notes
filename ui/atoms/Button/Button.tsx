import styled from "styled-components";
import tw from "twin.macro";
import { darken } from "polished";

import colors from "../../../config/colors";

const Button = styled.button`
  ${tw`bg-blue-400 outline-none border-none text-white p-2 px-4 md:px-6 rounded-full font-medium transition-all cursor-pointer text-sm md:text-base uppercase`}

  -webkit-appearance: none;

  &:hover {
    transform: scale(1.05);
    background-color: ${darken(0.2, colors.blue500)};
  }
`;

Button.defaultProps = {};

export default Button;
