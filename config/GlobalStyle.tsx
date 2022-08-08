import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import tw from "twin.macro";

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    body, html {
        font-family: 'Oxygen', sans-serif;
        font-size: 14px;
        ${tw`bg-grey-800`}
    }
`;

export default GlobalStyle;
