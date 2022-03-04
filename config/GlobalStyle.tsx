import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import tw from "twin.macro";

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    body, html {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        ${tw`bg-purple-600`}
    }
`;

export default GlobalStyle;
